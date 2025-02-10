import React, {FC, useState, useEffect} from "react";
import { PaginationWrapper, BtnSquare } from "./PaginationWrapper.styled";
import CardLoaded from "../WeaponsCard/CardLoaded";
import { IWeaponsCardDto } from "../WeaponsCard/CardLoaded";
import { Display } from "../styles/styles.styled";
import { fetchCards } from "../WeaponsCard/api";

const PaginationWeapons: FC = () => {

    const step = 4;
    const [cards, setCards] = useState<IWeaponsCardDto[]>([]);
    const [start, setStart] = useState<number>(0);
    const [end, setEnd] = useState<number>(step);

    const handleFetchCards = async () => {
        setCards(await fetchCards());
        // console.log('cards', cards);
    }

    const handleToLeft = () => {
        if(start-step >= 0){
            setStart(start - (end-start === step? step : step + 1));
            setEnd(end - step);
        }
        else if(step % start != 0 && start !== 0){
            setEnd(step - step % start);
            setStart(0);
        }
        else{
            setStart(cards.length - step);
            setEnd(cards.length);
        }
    }

    const handleToRight = () => {
        
        if (end + step <= cards.length){
            setStart(start + step);
            setEnd(end + step);
        }
        else if (cards.length % end !== 0){
            setStart(start + step);
            setEnd(cards.length);
        }
        else{
            setStart(0);
            setEnd(step);
        }
        
    }


    useEffect(()=>{
        handleFetchCards();
    }, []);

    return(
        <PaginationWrapper>
            <p>ukraine armed forces</p>
            <Display>
                <BtnSquare onClick={handleToLeft}>&laquo;</BtnSquare>
                {cards.length === 0? <p>error404</p> : cards.slice(start, end).map((card) => (<CardLoaded card={card}/>))}
                <BtnSquare onClick={handleToRight}>&raquo;</BtnSquare>
            </Display>
        </PaginationWrapper>
    );
}

export default PaginationWeapons;