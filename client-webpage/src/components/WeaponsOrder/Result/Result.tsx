import React, { FC } from "react";
import { ResultWrapper } from "./Result.styled";
import { Display } from "../../styles/styles.styled";

export interface IResult {
    txId?: string,
}

const Result:FC<IResult> = (props) => {

    const URL_TXID_DATA = process.env.REACT_APP_URL_TXID_DATA!;

    return(
        <ResultWrapper>
            <Display>
                <p>|</p>
                <p>{props.txId || 'none'}</p>
                <p>|</p>
                <a className="btn-default" href="http://localhost:4000/" rel="external" target="_blank"
                style={{cursor: props.txId === 'none'? 'not-allowed' : 'pointer',
                    backgroundColor: props.txId === 'none'? 'gray' :  'greenyellow'}}>check here txId</a>
                <p>|</p>
            </Display>
        </ResultWrapper>
    );
}

export default Result;