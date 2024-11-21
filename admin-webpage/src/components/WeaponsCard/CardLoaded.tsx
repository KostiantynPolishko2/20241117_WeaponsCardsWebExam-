import React, { FC, useState, ReactElement, useEffect } from "react";
import './WeaponsCard.css';
import { FielDescription, BtnCardIsVisible, BtnCRUD, PostStatus } from "./WeaponsCard.styled";
import { Display } from "../styles/styles.styled";
import { IWeaponsCardDto } from "./Card";
import { deleteWeaponsData } from "./api";

interface ICardLoaded {
    card: IWeaponsCardDto | null
}

const CardLoaded: FC<ICardLoaded> = (props) => {

    const [isDeleteStatus, setIsDeleteStatus] = useState<number>(0);
    const [deleteStatus, setDeleteStatus] = useState<ReactElement<HTMLElement>>(<></>);

    const handleDelete = async () => {
        deleteWeaponsData(props.card?.model || 'none');
        setIsDeleteStatus(await deleteWeaponsData(props.card?.description || 'none'));
    }

    useEffect(() => {
        if(isDeleteStatus === 201){
            console.log('delete status', isDeleteStatus);
            setDeleteStatus(<PostStatus style={{color: 'green', bottom: '20%', left: '30%'}}>DELETED</PostStatus>);
            setIsDeleteStatus(0);
        }
        else if (isDeleteStatus === 401){
            setDeleteStatus(<PostStatus style={{color: 'red', bottom: '20%', left: '30%'}}>ERROR</PostStatus>);
            setIsDeleteStatus(0)
        }
        else{
            setDeleteStatus(<></>)
        }
    }, [isDeleteStatus]);

    return (
        <>
            <div className="profile-details">
                <img className="avatar" src={props.card?.image_path} alt={`${props.card?.name || 'none'}`}/>
                <div className="profile-info">
                    <h2>Model:   {props.card?.model}</h2>
                    <h2>Type:   {props.card?.name}</h2>
                    <h3>Size:   {props.card?.price}UAH</h3>
                    <h3>Weight: {props.card?.weight}kg</h3>
                    <Display>
                        <h3>Activeted card:</h3>
                        <BtnCardIsVisible isVisible={props.card?.isVisible || false} isCursor={true} disabled={true}/>
                    </Display>
                </div>
            </div>
            <FielDescription>
                <p>{props.card?.description}</p>
            </FielDescription>
            <BtnCRUD className='delete-btn' disabled={!true} isCursor={!true} onClick={handleDelete}>Delete</BtnCRUD>
            {deleteStatus}
        </>
    );
}

export default CardLoaded;