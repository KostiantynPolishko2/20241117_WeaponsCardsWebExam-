import React, {FC} from "react";
import { SearchFormWrapper } from "./SearchForm.styled";
import '@fortawesome/fontawesome-free/css/all.min.css';

const SearchForm: FC = () => {

    return(
        <SearchFormWrapper>
            <input placeholder="model..."/>
            <button type="button">
                <i className="fa fa-search"></i>
            </button>
        </SearchFormWrapper>
    );
}

export default SearchForm;