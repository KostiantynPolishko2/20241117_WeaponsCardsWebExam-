import React, { FC, useState, ReactElement, useEffect } from "react";
import './WeaponsCard.css';
import '../styles/styles.css';
import { FielDescription, BtnCRUD } from "./WeaponsCard.styled";
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
                <Display _direction="column">
                    <div className="profile-info">
                        <div className="flex-container">
                            <h2>Model</h2>
                            <h2>{props.card?.model}</h2>
                        </div>
                        <div className="flex-container">
                            <h2>Type</h2>
                            <h2>{props.card?.name}</h2>
                        </div>
                        <div className="flex-container">
                            <h3>Price, UAH</h3>
                            <h3>{props.card?.price}</h3>
                        </div>
                        <div className="flex-container">
                            <h3>Weight, kg</h3>
                            <h3>{props.card?.weight}</h3>
                        </div>           
                    </div>
                    <BtnCRUD className='post-btn' disabled={!true} isCursor={!true}>ORDER</BtnCRUD>
                </Display>
            </div>
            <FielDescription>
                <p>{props.card?.description}</p>
            </FielDescription>
        </WeaponsCardWraps>
    );
}

export default CardLoaded;