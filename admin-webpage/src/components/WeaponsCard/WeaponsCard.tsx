import React, {FC, useEffect, useState, useMemo, useCallback} from 'react';
import './WeaponsCard.css';
import axios from 'axios';
import Card, { IWeaponsCardDto } from './Card';

interface IWeaponsCard {
  model: string | null,
}

interface IError {
  message: string,
}

const WeaponsCard: FC<IWeaponsCard> = (props) => {

  const [weaponsCardDto, setWeaponsCardDto] = useState<IWeaponsCardDto | null>(null);
  const [clientsError, setClientsError] = useState<IError | null>(null);

  const weaponsCardRequest = useMemo(() => 
    axios.create({
      baseURL: 'http://localhost:5144/api/WeaponsItems',
      method: 'get',
      responseType: 'json',
      timeout: 4000
    }), []
  );

  const handleRequest = useCallback(() => {

    weaponsCardRequest.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    if(props.model != null){
      weaponsCardRequest.get(`model/${props.model}`)
      .then(responce => {
        setWeaponsCardDto(responce.data);
        setClientsError(null);
      })
      .catch(error => {
          setWeaponsCardDto(null);
          setClientsError(error);
      });
    }
  }, [props.model, weaponsCardRequest]);

  useEffect(() => {
        handleRequest();
  }, [handleRequest]);

  if (props.model == null){
    return (<></>);
  }

  if (clientsError != null) {
    return (
      <div className="profile404-card">
        <img className="avatar" src={'https://docfiles.blob.core.windows.net/files/images/404.png'} alt='logo 404 NotFound'/>
        <h3>TRY NEW AGAIN</h3>
      </div>
    );
  }

  return (
    <Card card={weaponsCardDto}/>
  );
};

export default WeaponsCard;
