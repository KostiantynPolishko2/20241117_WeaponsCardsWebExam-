import React, {FC, useEffect, useState} from "react";
import { SearchFormWrapper } from "./SearchForm.styled";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchCard } from "./SearchFormApi";

interface ISearchForm {
    isLogin: boolean
}

const SearchForm: FC<ISearchForm> = (props) => {

    const [model, setModel] = useState<string>('model...')

    const handleInputBtn = (e: React.FormEvent<HTMLElement>) => {
        setModel((e.currentTarget as HTMLInputElement).value)
    }

    const handleSearchBtn = async (e: React.FormEvent<HTMLElement>) => {
        await fetchCard(model, e);
        setModel('model...');
    }

    return(
        <SearchFormWrapper isLogin={props.isLogin}>
            <input placeholder={model} onBlur={handleInputBtn} disabled={props.isLogin}/>
            <button type="button" onClick={handleSearchBtn} disabled={props.isLogin}>
                <i className="fa fa-search"></i>
            </button>
        </SearchFormWrapper>
    );
}

export default SearchForm;