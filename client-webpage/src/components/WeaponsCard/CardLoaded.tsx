import React, { FC, useState, ReactElement, useEffect } from "react";
import './WeaponsCard.css';
import { FielDescription, BtnCardIsVisible, BtnCRUD, PostStatus } from "./WeaponsCard.styled";
import { Display } from "../styles/styles.styled";
import { WeaponsCardWraps } from "./WeaponsCard.styled";
// import { IWeaponsCardDto } from "./Card";
// import { deleteWeaponsData } from "./api";

export interface IWeaponsCardDto {
    model: string,
    name: string, 
    isVisible: boolean,
    price: number,
    weight: number, 
    description: string,
    image_path: string
}

export interface ICardLoaded {
    card: IWeaponsCardDto
}

const CardLoaded: FC<ICardLoaded> = (props) => {
        return (
        <WeaponsCardWraps>
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
            {/* <BtnCRUD className='delete-btn' disabled={!true} isCursor={!true} onClick={handleDelete}>Delete</BtnCRUD> */}
            {/* {deleteStatus} */}
        </WeaponsCardWraps>
    );
}

export default CardLoaded;