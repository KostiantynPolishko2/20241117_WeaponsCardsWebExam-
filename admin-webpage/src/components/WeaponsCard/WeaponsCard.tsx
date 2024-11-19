import React, {FC, useEffect, useState, useMemo, useCallback} from 'react';
import './WeaponsCard.css';
import axios from 'axios';
import { fetchImagePath } from './api';
import { BtnImgWrapper, BlockLoad, WeaponsCardWraps, FielDescription, BtnCardIsVisible, BtnCRUD } from './WeaponsCard.styled';
import { Display } from '../styles/styles.styled';

interface IWeaponsCardDto {
  model: string,
  name: string, 
  isVisible: boolean,
  price: number,
  weight: number, 
  description: string,
  image_path: string
}

interface IError {
  message: string,
}

type TWeaponsCard = {
  model: string | null,
}

const WeaponsCard: FC<TWeaponsCard> = (props) => {

  const [weaponsCardDto, setWeaponsCardDto] = useState<IWeaponsCardDto | null>(null);
  const [clientsError, setClientsError] = useState<IError | null>(null);
  const [imagePath, setImagePath] = useState<string | null>(null);

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

  const handleImageAI = async (e: React.FormEvent<HTMLElement>) => {
    setImagePath(await fetchImagePath((e.currentTarget.lastElementChild as HTMLImageElement).alt));
  }

  return (
    <WeaponsCardWraps>
      <div className="profile-card">
        <div className="profile-details">
          <BtnImgWrapper onClick={handleImageAI} isDisable = {true}>
            <img className="avatar" src={imagePath || weaponsCardDto?.image_path} alt={`${weaponsCardDto?.name || 'none'}`}/>
          </BtnImgWrapper>
          <div className="profile-info">
            <h2>Name:   {weaponsCardDto?.model}</h2>
            <h2>Type:   {weaponsCardDto?.name}</h2>
            <h3>Size:   {weaponsCardDto?.price}UAH</h3>
            <h3>Weight: {weaponsCardDto?.weight}kg</h3>
            <Display>
              <h3>Activeted card:</h3>
              <BtnCardIsVisible isVisible={weaponsCardDto?.isVisible || false} isCursor={true} disabled={true}/>
            </Display>
          </div>
        </div>
        <FielDescription>
          <p>{weaponsCardDto?.description}</p>
        </FielDescription>
        <div className="actions">
          <button className="edit-btn">Edit</button>
          <BtnCRUD className='post-btn' disabled={true} isCursor={true}>Save</BtnCRUD>
          <BtnCRUD className='delete-btn' disabled={!true} isCursor={!true}>Delete</BtnCRUD>
        </div>
      </div>
    </WeaponsCardWraps>
  );
};

export default WeaponsCard;
