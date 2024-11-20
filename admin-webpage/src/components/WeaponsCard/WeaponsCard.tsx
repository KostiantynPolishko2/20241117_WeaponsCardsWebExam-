import React, {FC, useEffect, useState, useMemo, useCallback} from 'react';
import './WeaponsCard.css';
import axios from 'axios';
import Card, { IWeaponsCardDto } from './Card';
import Card404 from './Card404';
import CardDefault from './CardDefault';

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
    return <CardDefault/>;
  }

  if (clientsError != null) {
    return (
      <Card404 model={props.model}/>
    );
  }

  return (
    <Card card={weaponsCardDto}/>
  );
};

export default WeaponsCard;
