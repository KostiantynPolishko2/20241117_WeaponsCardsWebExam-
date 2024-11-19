import React, {FC, useEffect, useState, useMemo, useCallback} from 'react';
import './WeaponsCard.css';
import axios from 'axios';
import { fetchImagePath } from './api';
import { BtnImgWrapper, BlockLoad } from './WeaponsCard.styled';

interface IWeaponsCardDto {
  name: string,
  category: string, 
  size: number,
  weight: number,
  speed: number, 
  image_path: string
}

interface IError {
  message: string,
}

type TWeaponsCard = {
  name: string | null,
}

const AsteroidCard: FC<TWeaponsCard> = (props) => {

  const [asteroidInfoDto, setAsteroidInfoDto] = useState<IWeaponsCardDto | null>(null);
  const [clientsError, setClientsError] = useState<IError | null>(null);
  const [isBtnImg, setIsBtnImg] = useState<boolean>(true);
  const [imagePath, setImagePath] = useState<string | null>(null);

  const spaceObjectRequest = useMemo(() => 
    axios.create({
      baseURL: 'https://spaceobjectsserver.azurewebsites.net/api/SpaceObject',
      method: 'get',
      responseType: 'json',
    }), []
  );

  const handleRequest = useCallback(() => {
    if(props.name != null){
      spaceObjectRequest.get(`asteroid/${props.name}`)
      .then(responce => {
        setAsteroidInfoDto(responce.data);
      })
      .catch(error => {
          setClientsError(error);
      });
    }
  }, [props.name, spaceObjectRequest]);

  useEffect(() => {
        handleRequest();
  }, [handleRequest]);

  if (props.name == null){
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

  const handleBtnImage = () => {
    setIsBtnImg(true);
    setImagePath(null);
  }

  return (
    <div className="profile-card">
      <div className="profile-details">
        <BtnImgWrapper onClick={handleImageAI} isDisable = {isBtnImg}>
          <BlockLoad isDisable = {isBtnImg}>CLICK NEW</BlockLoad>
          <img className="avatar" src={imagePath || asteroidInfoDto?.image_path} alt={`${asteroidInfoDto?.name || 'none'}`}/>
        </BtnImgWrapper>
        <div className="profile-info">
          <h2>Name:   {asteroidInfoDto?.name}</h2>
          <h2>Type:   {asteroidInfoDto?.category}</h2>
          <h3>Size:   {asteroidInfoDto?.size}</h3>
          <h3>Weight: {asteroidInfoDto?.weight}</h3>
          <h3>Speed:  {asteroidInfoDto?.speed}</h3>
        </div>
      </div>
      <div className="actions">
        <button className="edit-btn" onClick={() => setIsBtnImg(false)}>Edit</button>
        <button className="post-btn" onClick={handleBtnImage} disabled>Save</button>
        <button className="delete-btn" onClick={handleBtnImage}>Cancel</button>
      </div>
    </div>
  );
};

export default AsteroidCard;
