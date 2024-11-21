import React, {FC} from "react";
import { WeaponsCardWraps } from "./WeaponsCard.styled";
import './WeaponsCard.css';

const CardDefault: FC = () => {
    return (
        <WeaponsCardWraps>
            <div className="profile-card" style={{padding: '5px', width: '480px'}}>
                <img src="https://weaponsimages.blob.core.windows.net/images-service/types-weapons-ukraine.png" width={'475px'} alt='logo types-weapons-ukraine'></img>
            </div>
        </WeaponsCardWraps>
    );
}

export default CardDefault;