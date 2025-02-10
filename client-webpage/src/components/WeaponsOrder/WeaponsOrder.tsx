import React, {FC} from "react";
import { WeaponsOrderWrapper } from "./WeaponsOrder.styled";
import { ICardLoaded } from "../WeaponsCard/CardLoaded";
import CardLoaded from "../WeaponsCard/CardLoaded";
import FormOrder from "./FormOrder/FormOrder";
import { Display } from "../styles/styles.styled";

// interface IWeaponsCard {
//     weaponsCard: React.FC,
// }

const WeaponsOrder:FC<ICardLoaded> = (props) => {

    return(
        <WeaponsOrderWrapper>
            <Display>
                <CardLoaded card={props.card} isButton={true}/>
                <FormOrder price={props.card.price} model={props.card.model}/>
            </Display>
        </WeaponsOrderWrapper>
    );
}

export default WeaponsOrder;