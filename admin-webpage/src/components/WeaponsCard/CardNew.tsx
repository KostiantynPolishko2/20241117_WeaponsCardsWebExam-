import React, { FC, useState } from "react";
import './WeaponsCard.css';
import { BtnImgWrapper, CheckBox, CardInput, CardInputDescription } from "./WeaponsCard.styled";
import { Display } from "../styles/styles.styled";

interface ICardNew {
}

const CardNew: FC<ICardNew> = () => {

    const [imageAIPath, setImageAIPath] = useState<string | null>(null);
    const handleImageAI = async (e: React.FormEvent<HTMLElement>): Promise<void> => {
        // setImageAIPath(await fetchImageAIPath((e.currentTarget.lastElementChild as HTMLImageElement).alt));
    }

    const handleClearInput = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        let elements = e.currentTarget.nextElementSibling?.lastElementChild?.querySelectorAll('input');
        elements?.forEach(element => {
            if(element.name == 'is_display'){
                element.checked = false;
            }
            element.value = '';
        });
        
        (e.currentTarget.nextElementSibling?.nextElementSibling as HTMLInputElement).value = '';
    }

    return (
        <div className="card-new">
            <button className="btn-card-clear-input" onClick={handleClearInput}>CLEAR</button>
            <div className="profile-details">
                <BtnImgWrapper onClick={handleImageAI} isDisable = {!true}>
                    <img className="avatar" src={'https://weaponsimages.blob.core.windows.net/images-service/select_image.png'} alt={'logo select'}/>
                </BtnImgWrapper>
                <div className="profile-info">
                    <label>
                        <Display>
                            <h2>Model:</h2>
                            <CardInput id='model' placeholder="name..."/>
                        </Display>
                    </label> 
                    <label>
                        <Display>
                            <h2>Name:</h2>
                            <CardInput id='name' placeholder="name..."/>
                        </Display>
                    </label> 
                    <label>
                        <Display>
                            <h2>Type:</h2>
                            <CardInput name='type' placeholder="type..."/>
                        </Display>
                    </label>
                    <label>
                        <Display>
                            <h2>Vendor:</h2>
                            <CardInput id='vendor' placeholder="name..."/>
                        </Display>
                    </label> 
                    <label>
                        <Display>
                            <h3>Price, uah:</h3>
                            <CardInput name='price' placeholder="price..."/>
                        </Display>
                    </label>   
                    <label>
                        <Display>
                            <h3>Weight,kg:</h3>
                            <CardInput name='weight' placeholder="weight..."/>
                        </Display>
                    </label>
                    <label>
                        <Display>
                            <h3>Activeted card:</h3>
                            <CheckBox name='is_display'/>
                        </Display>
                    </label>                   
                </div>
            </div>
            <CardInputDescription name='description' placeholder='description...'/>
        </div>
    );
}

export default CardNew;