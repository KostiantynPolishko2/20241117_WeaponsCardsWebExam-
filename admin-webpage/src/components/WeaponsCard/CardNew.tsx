import React, { FC, useState, ReactElement, useEffect } from "react";
import './WeaponsCard.css';
import { BtnImgWrapper, CheckBox, CardInput, CardInputDescription, BtnCRUD, PostStatus } from "./WeaponsCard.styled";
import { Display } from "../styles/styles.styled";
import { postWeaponsData } from "./api";

type WeaponsItem = {
    Model: string,
    Name: string,
    Type: string,
    isVisible: boolean
}

type WeaponsProperty = {
    price: number,
    weight: number,
    Vendor: string,
    Description: string,
}

type WeaponsImages = {
    name: string,
    path: string
}

export type WeaponsData = {
    weaponsItem: WeaponsItem,
    weaponsProperty: WeaponsProperty
    weaponsImage: WeaponsImages
}

interface ICardNew {
    _handleIsCardNew: ()=>void
}

const CardNew: FC<ICardNew> = (props) => {
   
    const [_model, setModel] = useState<string>('none');
    const [_name, setName] = useState<string>('none');
    const [_type, setType] = useState<string>('none');
    const [_visible, setVisible] = useState<boolean>(false);
    const [_price, setPrice] = useState<number>(0);
    const [_weight, setWeight] = useState<number>(0);
    const [_vendor, setVendor] = useState<string>('none');
    const [_description, setDescription] = useState<string>('none');
    const [_imagePath, setImagePath] = useState<string>('');
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isPostStatus, setIsPostStatus] = useState<number>(0);
    const [postStatus, setPostStatus] = useState<ReactElement<HTMLElement>>(<></>);

    const handleImageAI = async (e: React.FormEvent<HTMLElement>): Promise<void> => {
        // setImagePath(await fetchImageAIPath((e.currentTarget.lastElementChild as HTMLImageElement).alt));
    }

    const handleClearInput = () => {

        let elements = document.getElementById('card-new')?.querySelectorAll('input');

        elements?.forEach(element => {
            if(element.name === 'is_display'){
                element.checked = false;
            }
            element.value = '';
        });
        setIsValid(false);
        setIsPostStatus(0);
    }

    const handlePrice = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        let price = (e.currentTarget as HTMLInputElement).value;
        if(!isNaN(Number(price)) && isFinite(Number(price))){
            setPrice(Number(price));
            setIsValid(true);
            e.currentTarget.style.backgroundColor = '#f9ffc4';
        }
        else{
            setIsValid(false);
            e.currentTarget.style.backgroundColor = 'red';
        }
    }

    const handleWeight = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        let price = (e.currentTarget as HTMLInputElement).value;
        if(!isNaN(Number(price)) && isFinite(Number(price))){
            setWeight(Number(price));
            setIsValid(true);
            e.currentTarget.style.backgroundColor = '#f9ffc4';
        }
        else{
            setIsValid(false);
            e.currentTarget.style.backgroundColor = 'red';
        }
    }

    const handleSave = async () => {

        if(!isValid){
            return;
        }

        setImagePath('https://weaponsimages.blob.core.windows.net/images-service/select_image.png');
        const _weaponsData: WeaponsData = {weaponsItem : {
            Model: _model, Name: _name, Type: _type, isVisible: _visible
        }, weaponsProperty : {
            price: _price, weight: _weight, Vendor: _vendor, Description: _description
        }, weaponsImage : {
            name: _name, path: _imagePath || ''
        }}

        setIsPostStatus(await postWeaponsData(_model, _weaponsData));
    }

    useEffect(() => {
        if(isPostStatus === 201){
            setPostStatus(<PostStatus style={{color: '#28ed21'}}>POSTED</PostStatus>);
            handleClearInput();
        }
        else if (isPostStatus === 401){
            setPostStatus(<PostStatus style={{color: 'red'}}>ERROR</PostStatus>);
        }
        else{
            setPostStatus(<></>)
        }
    }, [isPostStatus]);

    return (
        <>
            <div id="card-new">
                <button className="btn-card-clear-input" onClick={handleClearInput}>CLEAR</button>
                <div className="profile-details">
                    <BtnImgWrapper onClick={handleImageAI} isDisable = {!true}>
                        <img className="avatar" src={'https://weaponsimages.blob.core.windows.net/images-service/select_image.png'} alt={'logo select'}/>
                    </BtnImgWrapper>
                    <div className="profile-info">
                        <label>
                            <Display>
                                <h2>Model:</h2>
                                <CardInput id='model' placeholder="model..." onBlur={e => setModel(e.currentTarget.value)}/>
                            </Display>
                        </label> 
                        <label>
                            <Display>
                                <h2>Name:</h2>
                                <CardInput id='name' placeholder="name..." onBlur={e => setName(e.currentTarget.value)}/>
                            </Display>
                        </label> 
                        <label>
                            <Display>
                                <h2>Type:</h2>
                                <CardInput name='type' placeholder="type..." onBlur={e => setType(e.currentTarget.value)}/>
                            </Display>
                        </label>
                        <label>
                            <Display>
                                <h2>Vendor:</h2>
                                <CardInput id='vendor' placeholder="name..." onBlur={e => setVendor(e.currentTarget.value)}/>
                            </Display>
                        </label> 
                        <label>
                            <Display>
                                <h3>Price, uah:</h3>
                                <CardInput name='price' placeholder="price..." onBlur={handlePrice}/>
                            </Display>
                        </label>   
                        <label>
                            <Display>
                                <h3>Weight,kg:</h3>
                                <CardInput name='weight' placeholder="weight..." onBlur={handleWeight}/>
                            </Display>
                        </label>
                        <label>
                            <Display>
                                <h3>Activeted card:</h3>
                                <CheckBox name='is_display' onBlur={e => setVisible(e.currentTarget.checked)}/>
                            </Display>
                        </label>                   
                    </div>
                </div>
                <CardInputDescription name='description' placeholder='description...' onBlur={e => setDescription(e.currentTarget.value)}/>
            </div>
            <BtnCRUD className='post-btn' disabled={!isValid} isCursor={!isValid} onClick={handleSave}>Save</BtnCRUD>
            {postStatus}
        </>
    );
}

export default CardNew;