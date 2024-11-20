import React, { FC, useState, ReactElement, useEffect} from "react";
import './WeaponsCard.css';
import { WeaponsCardWraps, BtnCRUD  } from "./WeaponsCard.styled";
import CardLoaded from "./CardLoaded";
import CardNew from "./CardNew";

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

    const [cardDisplayed, setCardDisplayed] = useState<ReactElement<HTMLElement> | null>(null);

    useEffect(() => {
        setCardDisplayed(<CardLoaded card={props.card}/>);
    }, [props.card?.model]);

    return (
        <WeaponsCardWraps>
            <div className="profile-card">
                <CardNew/>
                {/* {cardDisplayed} */}
                <div className="actions">
                    <button className="edit-btn">New</button>
                    <BtnCRUD className='post-btn' disabled={true} isCursor={true}>Save</BtnCRUD>
                    <BtnCRUD className='delete-btn' disabled={!true} isCursor={!true}>Delete</BtnCRUD>
                </div>
          </div>
        </WeaponsCardWraps>
    );
}

export default Card;