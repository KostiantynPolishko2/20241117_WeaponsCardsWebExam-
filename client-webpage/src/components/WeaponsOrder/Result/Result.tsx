import React, { FC } from "react";
import { ResultWrapper } from "./Result.styled";
import { Display } from "../../styles/styles.styled";

export interface IResult {
    txId?: string,
    linkApp?: string,
}

const Result:FC<IResult> = (props) => {
    return(
        <ResultWrapper>
            <Display>
                <p>|</p>
                <p>{props.txId || 'none'}</p>
                <p>|</p>
                <a className="btn-default" href="https://expo.dev/signup" target="_blank">check here txId</a>
                <p>|</p>
            </Display>
        </ResultWrapper>
    );
}

export default Result;