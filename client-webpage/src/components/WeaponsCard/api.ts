import axios from "axios";
import { IWeaponsCardDto } from "./CardLoaded";


export const fetchCards = async (): Promise<IWeaponsCardDto[]> => {
    const cardsData = axios.create({
        baseURL: 'http://localhost:5053/api/WeaponsCards',
        method: 'get',
        responseType: 'json',
    });

    try{
        const responce = await cardsData.get('client-models');
        // console.log('fetch cards', responce.data)
        return responce.data;
    }
    catch(error){
        return [];
    }
}