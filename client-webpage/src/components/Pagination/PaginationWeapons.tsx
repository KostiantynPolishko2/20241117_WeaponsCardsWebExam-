import React, {FC, useState} from "react";
import { PaginationWrapper } from "./PaginationWrapper.styled";
import CardLoaded from "../WeaponsCard/CardLoaded";
import { ICardLoaded, IWeaponsCardDto } from "../WeaponsCard/CardLoaded";
import default_img from '../../assets/images/ukraine-weapons.png';
import { Display } from "../styles/styles.styled";

const PaginationWeapons: FC = () => {

    const [card, setCard] = useState<IWeaponsCardDto>({
        model: 'none model', name: 'none name', isVisible: true, price: 0, weight: 0.0, 
        description: 'none description', image_path: default_img});

    

    return(
        <PaginationWrapper>
            <p>ukraine armed forces</p>
            <Display>
                <CardLoaded card={card}/>
                <CardLoaded card={card}/>
            </Display>
        </PaginationWrapper>
    );
}

export default PaginationWeapons;