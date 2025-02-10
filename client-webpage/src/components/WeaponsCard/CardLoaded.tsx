import React, { FC, useContext } from "react";
import './WeaponsCard.css';
import '../styles/styles.css';
import { FielDescription, BtnCRUD } from "./WeaponsCard.styled";
import { Display } from "../styles/styles.styled";
import { WeaponsCardWraps } from "./WeaponsCard.styled";
import { HandleSetCardContext } from "../ClientPage/ClientPage";

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
    card: IWeaponsCardDto,
    isButton?: boolean,
}

const CardLoaded: FC<ICardLoaded> = (props) => {

    const handleSetCardContext = useContext(HandleSetCardContext);

    return (
        <WeaponsCardWraps>
            <div className="profile-details">
                <img className="avatar" src={require(`../../assets/images/${props.card.model || '404.png'}.png`)} alt={`${props.card.name || 'none'}`}/>
                <Display _direction="column">
                    <div className="profile-info">
                        <div className="flex-container">
                            <h4>model</h4>
                            <h4>{props.card.model}</h4>
                        </div>
                        <div className="flex-container">
                            <h4>name</h4>
                            <h4 className="txt-overlow">{props.card.name}</h4>
                        </div>
                        <div className="flex-container">
                            <h4>price, wei</h4>
                            <h4>{props.card.price}</h4>
                        </div>
                        <div className="flex-container">
                            <h4>weight, kg</h4>
                            <h4>{props.card.weight}</h4>
                        </div>           
                    </div>
                    <BtnCRUD onClick={()=>{handleSetCardContext(props.card)}} className='post-btn' disabled={props.isButton || false} isCursor={props.isButton || false}>ORDER</BtnCRUD>
                </Display>
            </div>
            <FielDescription>
                <p>{props.card?.description}</p>
            </FielDescription>
        </WeaponsCardWraps>
    );
}

export default CardLoaded;