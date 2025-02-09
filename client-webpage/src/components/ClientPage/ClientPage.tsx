import React, { FC } from "react";
import 'the-new-css-reset';
import { ClientPageWrapper as _main} from "./ClientPage.styled";
import PaginationWeapons from "../Pagination/PaginationWeapons";

const ClientPage: FC = () => {
    return(
    <_main>
        <PaginationWeapons/>
    </_main>);
}

export default ClientPage;