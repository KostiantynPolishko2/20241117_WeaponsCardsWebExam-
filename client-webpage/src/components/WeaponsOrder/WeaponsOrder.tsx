import React, {FC, useState, useEffect} from "react";
import { WeaponsOrderWrapper } from "./WeaponsOrder.styled";
import { ICardLoaded } from "../WeaponsCard/CardLoaded";
import CardLoaded from "../WeaponsCard/CardLoaded";
import FormOrder from "./FormOrder/FormOrder";
import { Display } from "../styles/styles.styled";
import FormAccount from "./FormAccount/FormAccount";
import OrderData from "./Orders/OrderData";
import { IAccount } from "./FormAccount/FormAccount";

const WeaponsOrder:FC<ICardLoaded> = (props) => {

    const [model, setModel] = useState<string>(props.card.model);
    const [totalSum, setTotalSum] = useState<number>(props.card.price);
    const [userData, setUserData] = useState<IAccount>({account: 'none', privateKey: 'none'});

    const handleTotalSum = (totalSum: number) => {
        setTotalSum(totalSum);
    }

    const handleSetUserData = (_account: string, _privateKey: string) => {
        setUserData({account: _account, privateKey: _privateKey});
    }

    useEffect(()=>{
        setModel(props.card.model);
    }, [props.card.model]);

    return(
        <WeaponsOrderWrapper>
            <Display>
                <CardLoaded card={props.card} isButton={true}/>
                <div>
                    <Display>
                        <FormOrder price={props.card.price} model={props.card.model} handleTotalSum={handleTotalSum}/>
                        <FormAccount handleSetUserData={handleSetUserData}/>
                    </Display>
                    <OrderData model={model} totalSum={totalSum} account={userData.account}/>
                </div>
            </Display>
        </WeaponsOrderWrapper>
    );
}

export default WeaponsOrder;