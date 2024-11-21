import React, {FC, useState} from "react";
import { SearchFormWrapper } from "./SearchForm.styled";
import '@fortawesome/fontawesome-free/css/all.min.css';

interface ISearchForm {
    isLogin: boolean,
    _handleModeFromSearch: (e: React.FormEvent<HTMLElement>, model: string) =>void
}

const SearchForm: FC<ISearchForm> = (props) => {

    const [model, setModel] = useState<string>('model...')

    const handleInputBtn = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setModel((e.currentTarget as HTMLInputElement).value)
    }

    return(
        <SearchFormWrapper isLogin={props.isLogin}>
            <input placeholder={model} onBlur={handleInputBtn} disabled={props.isLogin}/>
            <button type="button" onClick={e => {props._handleModeFromSearch(e, model); setModel('model...');}} disabled={props.isLogin}>
                <i className="fa fa-search"></i>
            </button>
        </SearchFormWrapper>
    );
}

export default SearchForm;