import React, { FC } from "react";
import { WeaponsTable404Wrapper } from "./WeaponsItemsTable.styled";

const WeaponsTable404: FC = () => {

    return (
        <WeaponsTable404Wrapper table_type={'404'}>
            <p>the dates are not available</p>
            <img src="https://weaponsimages.blob.core.windows.net/errors/404.png" alt='logo error404' width={'740px'}/>
        </WeaponsTable404Wrapper>
    );
}

export default WeaponsTable404;