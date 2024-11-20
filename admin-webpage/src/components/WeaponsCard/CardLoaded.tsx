import React, { FC } from "react";
import './WeaponsCard.css';
import { FielDescription, BtnCardIsVisible } from "./WeaponsCard.styled";
import { Display } from "../styles/styles.styled";
import { IWeaponsCardDto } from "./Card";

interface ICardLoaded {
    card: IWeaponsCardDto | null
}

const CardLoaded: FC<ICardLoaded> = (props) => {
    return (
        <>
            <div className="profile-details">
                <img className="avatar" src={props.card?.image_path} alt={`${props.card?.name || 'none'}`}/>
                <div className="profile-info">
                    <h2>Name:   {props.card?.model}</h2>
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
        </>
    );
}

export default CardLoaded;