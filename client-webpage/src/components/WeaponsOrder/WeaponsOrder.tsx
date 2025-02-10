import React, {FC} from "react";
import { WeaponsOrderWrapper } from "./WeaponsOrder.styled";
import { ICardLoaded } from "../WeaponsCard/CardLoaded";
import CardLoaded from "../WeaponsCard/CardLoaded";

// interface IWeaponsCard {
//     weaponsCard: React.FC,
// }

const WeaponsOrder:FC<ICardLoaded> = (props) => {

    return(
        <WeaponsOrderWrapper>
            <p>weapons order</p>
            <CardLoaded card={props.card}/>
        </WeaponsOrderWrapper>
    );
}

export default WeaponsOrder;