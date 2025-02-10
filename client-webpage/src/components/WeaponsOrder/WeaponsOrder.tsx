import React, {FC, useState, useEffect} from "react";
import {Contract} from 'ethers';
import { WeaponsOrderWrapper } from "./WeaponsOrder.styled";
import { ICardLoaded } from "../WeaponsCard/CardLoaded";
import CardLoaded from "../WeaponsCard/CardLoaded";
import FormOrder from "./FormOrder/FormOrder";
import { Display } from "../styles/styles.styled";
import FormAccount from "./FormAccount/FormAccount";
import OrderData from "./Orders/OrderData";
import { IAccount } from "./FormAccount/FormAccount";
import Result from "./Result/Result";
import { getTimeLockSC } from "../Contracts/TimeLockSC";

const WeaponsOrder:FC<ICardLoaded> = (props) => {

    const [model, setModel] = useState<string>(props.card.model);
    const [totalSum, setTotalSum] = useState<number>(props.card.price);
    const [userData, setUserData] = useState<IAccount>({account: 'none', privateKey: 'none'});
    const [lockTimesSC, setLockTimeSC] = useState<Contract | null>(null);

    const handleTotalSum = (totalSum: number) => {
        setTotalSum(totalSum);
    }

    const handleSetUserData = (_account: string, _privateKey: string) => {
        setUserData({account: _account, privateKey: _privateKey});
        // console.log('handle account', userData.account);
    }

    const handleLTSC = async () => {
        setLockTimeSC(await getTimeLockSC(userData?.privateKey));
        // console.log('lockTimesSC', lockTimesSC);
    }

    useEffect(()=>{
        handleLTSC();
        // console.log('useEffect account', userData.account);
    }, [userData.account]);

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
                    <Result/>
                </div>
            </Display>
        </WeaponsOrderWrapper>
    );
}

export default WeaponsOrder;