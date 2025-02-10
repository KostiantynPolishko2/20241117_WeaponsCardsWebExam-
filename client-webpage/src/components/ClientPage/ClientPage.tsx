import React, { FC, useState, createContext } from "react";
import 'the-new-css-reset';
import { ClientPageWrapper as _main} from "./ClientPage.styled";
import PaginationWeapons from "../Pagination/PaginationWeapons";
import WeaponsOrder from "../WeaponsOrder/WeaponsOrder";
import { IWeaponsCardDto, ICardLoaded } from "../WeaponsCard/CardLoaded";

export const HandleSetCardContext = createContext((card: IWeaponsCardDto):void=>{});

const ClientPage: FC = () => {

    const cardDefault: IWeaponsCardDto = {model: 'ukraine-weapons', name: 'none', isVisible: false, price: 0, weight: 0.0, description: 'none', image_path: 'none'}
    const [isVisibleOrder, setIsVisibleOrder] = useState<boolean>(false);
    const [card, setCard] = useState<IWeaponsCardDto>(cardDefault);

    const handleSetCard = (card: IWeaponsCardDto) => {
        setCard(card);
        setIsVisibleOrder(true);
    }

    return(
    <_main>
        <HandleSetCardContext value={handleSetCard}>
            <PaginationWeapons/>
        </HandleSetCardContext>
        {isVisibleOrder? <WeaponsOrder card={card}/> : <></>}
    </_main>);
}

export default ClientPage;