import React, { FC, FormEvent, FormHTMLAttributes, useState } from "react";
import { FormAccountWrapper, ButtonAuth } from "./FormAccount.styled";
import '../../styles/standard.css';

export interface IAccount {
    account: string,
    privateKey: string,
}

interface IHandleAccount {
    // handleSetAccount: (_account: string, _privateKey: string)=>void,
    // handleResetLoadedSC?: ()=>void,
}

const FormAccount: FC<IHandleAccount> = (props) => {

    const [isDisable, setIsDisable] = useState<boolean>(false);

    const handleAuth = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        const _account: string = (e.currentTarget.parentElement?.getElementsByTagName('input')[0] as HTMLInputElement).value.toString();
        const _privateKey: string = (e.currentTarget.parentElement?.getElementsByTagName('input')[1] as HTMLInputElement).value.toString();
        const _form  = e.currentTarget.parentElement as HTMLFormElement | null;

        // console.log('account, key', _account, _privateKey);

        if (_account && _privateKey){
            _form?.reset();
            setIsDisable(true);
            // props.handleSetAccount(_account, _privateKey);
        }
    }

    const handleReset = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        // window.location.reload();
        const _form  = e.currentTarget.parentElement as HTMLFormElement | null;
        _form?.reset();
        setIsDisable(false);
        // props.handleResetLoadedSC();
    }

    return(
        <FormAccountWrapper isDisable={isDisable}>
            <label htmlFor='account'>account</label>
            <input id='account' type='text' placeholder="account address" disabled={isDisable} autoFocus={true}/>
            <ButtonAuth isDisable={isDisable} disabled={isDisable} onClick={handleAuth} style={{bottom: '0px', left: '0px'}}>AUTH</ButtonAuth>
            <br/>
            <label htmlFor='private_key'>key</label>
            <input id='private_key' type='text' placeholder="key address" disabled={isDisable} style={{fontSize: '12px', left: '15px'}}/>
            <ButtonAuth isDisable={false} onClick={handleReset} style={{bottom: '0px', left: '15px', backgroundColor: 'red'}}>RESET</ButtonAuth>
        </FormAccountWrapper>
    )
}

export default FormAccount;