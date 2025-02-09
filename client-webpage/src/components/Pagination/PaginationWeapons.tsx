import React, {FC, useState, useEffect} from "react";
import { PaginationWrapper } from "./PaginationWrapper.styled";
import CardLoaded from "../WeaponsCard/CardLoaded";
import { IWeaponsCardDto } from "../WeaponsCard/CardLoaded";
import { Display } from "../styles/styles.styled";
import { fetchCards } from "../WeaponsCard/api";

const PaginationWeapons: FC = () => {

    const [cards, setCards] = useState<IWeaponsCardDto[]>([]);

    const handleFetchCards = async () => {
        setCards(await fetchCards());
        console.log('cards', cards);
    }

    useEffect(()=>{
        handleFetchCards();
    }, []);

    return(
        <PaginationWrapper>
            <p>ukraine armed forces</p>
            <Display>
                {cards.length === 0? <p>error404</p> : cards.map((card) => (<CardLoaded card={card}/>))}
            </Display>
        </PaginationWrapper>
    );
}

export default PaginationWeapons;