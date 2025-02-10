import React, {FC} from "react";
import { WeaponsOrderWrapper } from "./WeaponsOrder.styled";
import { ICardLoaded } from "../WeaponsCard/CardLoaded";
import CardLoaded from "../WeaponsCard/CardLoaded";
import FormOrder from "./FormOrder/FormOrder";
import { Display } from "../styles/styles.styled";
import FormAccount from "./FormAccount/FormAccount";

// interface IWeaponsCard {
//     weaponsCard: React.FC,
// }

const WeaponsOrder:FC<ICardLoaded> = (props) => {

    return(
        <WeaponsOrderWrapper>
            <Display>
                <CardLoaded card={props.card} isButton={true}/>
                <Display>
                    <FormOrder price={props.card.price} model={props.card.model}/>
                    <FormAccount/>
                </Display>
            </Display>
        </WeaponsOrderWrapper>
    );
}

export default WeaponsOrder;