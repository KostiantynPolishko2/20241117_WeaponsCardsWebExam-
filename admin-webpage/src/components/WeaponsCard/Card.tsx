import React, { FC, useState } from "react";
import './WeaponsCard.css';
import { BtnImgWrapper, WeaponsCardWraps, FielDescription, BtnCardIsVisible, BtnCRUD  } from "./WeaponsCard.styled";
import { Display } from "../styles/styles.styled";
import { fetchImageAIPath } from './api';

export interface IWeaponsCardDto {
    model: string,
    name: string, 
    isVisible: boolean,
    price: number,
    weight: number, 
    description: string,
    image_path: string
}

interface ICard {
    card: IWeaponsCardDto | null
}

const Card: FC<ICard> = (props) => {

    const [imageAIPath, setImageAIPath] = useState<string | null>(null);

    const handleImageAI = async (e: React.FormEvent<HTMLElement>): Promise<void> => {
        setImageAIPath(await fetchImageAIPath((e.currentTarget.lastElementChild as HTMLImageElement).alt));
      }

    return (
        <WeaponsCardWraps>
            <div className="profile-card">
                <div className="profile-details">
                    <BtnImgWrapper onClick={handleImageAI} isDisable = {true}>
                        <img className="avatar" src={imageAIPath || props.card?.image_path} alt={`${props.card?.name || 'none'}`}/>
                    </BtnImgWrapper>
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
                    <div className="actions">
                    <button className="edit-btn">Edit</button>
                    <BtnCRUD className='post-btn' disabled={true} isCursor={true}>Save</BtnCRUD>
                    <BtnCRUD className='delete-btn' disabled={!true} isCursor={!true}>Delete</BtnCRUD>
                </div>
          </div>
        </WeaponsCardWraps>
    );
}

export default Card;