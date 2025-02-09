import React, {FC, useState} from "react";
import { PaginationWrapper } from "./PaginationWrapper.styled";
import CardLoaded from "../WeaponsCard/CardLoaded";
import { ICardLoaded, IWeaponsCardDto } from "../WeaponsCard/CardLoaded";
import default_img from '../../assets/images/ukraine-weapons.png';

const PaginationWeapons: FC = () => {

    const [card, setCard] = useState<IWeaponsCardDto>({
        model: 'undefined', name: 'undefined', isVisible: false, price: 0, weight: 0.0, 
        description: 'undefined', image_path: default_img});

    return(
        <PaginationWrapper>
            <p>pagination weapons</p>
            <CardLoaded card={card}/>
            <CardLoaded card={card}/>
            <CardLoaded card={card}/>
        </PaginationWrapper>
    );
}

export default PaginationWeapons;