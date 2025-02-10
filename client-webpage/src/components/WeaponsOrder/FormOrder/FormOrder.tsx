import React, { FC, useState, useEffect } from "react";
import { FormOrderWraps } from "./FormOrder.styled";

interface IFormOrder {
    model: string,
    price: number,
}

const FormOrder:FC<IFormOrder> = (props) => {
    const [model, setModel] = useState<string>(props.model);
    const [totalSum, setTotalSum] = useState<number>(props.price * 1);

    const handleTotalSum = (e: React.FormEvent<HTMLElement>) => {
        setTotalSum((e.currentTarget as HTMLFormElement).value * props.price)
        // console.log('total sum', totalSum);
    }

    const handleFormReset = () => {
        (document.getElementById('order') as HTMLFormElement).reset();
        // console.log('form order', document.getElementById('order'));
    }

    useEffect(() => {
        setModel(props.model);
        setTotalSum(props.price * 1);
        handleFormReset();
    }, [props.price]);

    return(
        <FormOrderWraps id="order">
            <p>form weapons order</p>
            <label htmlFor='quantity'>quantity</label>
            <input id='quantity' type='number' min='1' placeholder='1' onChange={handleTotalSum}/><br/>
            <label htmlFor='total'>total, uah</label>
            <input id='total' type='text' placeholder={totalSum.toString()} style={{left: '12px', backgroundColor: ' #ddd088'}} disabled/>
        </FormOrderWraps>
    );
}

export default FormOrder;