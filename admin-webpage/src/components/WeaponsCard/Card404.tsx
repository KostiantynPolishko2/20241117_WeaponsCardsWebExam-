import React, {FC} from "react";
import { WeaponsCardWraps } from "./WeaponsCard.styled";
import './WeaponsCard.css';

interface ICard404 {
    model?: string
}

const Card404: FC<ICard404> = (props) => {
    return (
        <WeaponsCardWraps>
            <div className="profile404-card" style={{padding: '5px', width: '480px'}}>
                <p>weapons model <span>{props.model?.toUpperCase() || 'None'}</span> is not founded</p>
                <img src="https://weaponsimages.blob.core.windows.net/errors/404.png" width={'475px'} alt={`logo ${props.model || 'weapons'}`}/>
            </div>
        </WeaponsCardWraps>
    );
}

export default Card404;