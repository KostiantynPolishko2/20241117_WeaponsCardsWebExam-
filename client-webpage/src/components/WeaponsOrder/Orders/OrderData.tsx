import React, { FC } from "react";
import { OrderDataWrapper } from "./OrderData.styled";
import { Display } from "../../styles/styles.styled";

export interface IOrderData {
    model?: string,
    totalSum?: number,
    account?: string,
}

const OrderData:FC<IOrderData> = (props) => {
    return(
        <OrderDataWrapper>
            <Display>
                <p>|</p>
                <p>{props.model || 'none'}</p>
                <p>|</p>
                <p>{props.totalSum || 0} wei</p>
                <p>|</p>
                <p>{props.account || 'none'}</p>
                <p>|</p>
                <button className="btn-default">confirm</button>
                <p>|</p>
            </Display>
        </OrderDataWrapper>
    );
}

export default OrderData;