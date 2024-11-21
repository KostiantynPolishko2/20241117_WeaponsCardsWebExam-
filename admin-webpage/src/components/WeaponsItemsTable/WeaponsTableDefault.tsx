import React, { FC } from "react";
import { WeaponsTableWrapper } from "./WeaponsItemsTable.styled";

const WeaponsTableDefault: FC = () => {

    return (
        <WeaponsTableWrapper table_type={'default'}>
            <img src='https://weaponsimages.blob.core.windows.net/images-service/ukraine-world-analysis.png' alt='logo default table' width={'740px'}/>
        </WeaponsTableWrapper>
    );
}

export default WeaponsTableDefault;