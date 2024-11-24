import axios from "axios";
import { WeaponsData } from "./CardNew";

export const fetchImageAIPath = async (weaponsModel: string): Promise<string> => { 
    const weaponsImageAI = axios.create({
        baseURL: 'https://imageai-server.azurewebsites.net/api/ImageAI/weapons-image',
        method: 'get',
        responseType: 'json',
        timeout: 25000,
    });
    weaponsImageAI.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    try{
        console.log('requested model', weaponsModel);
        const responce = await weaponsImageAI.get(weaponsModel);
        return responce.data;
    }
    catch(error){
        console.log('error', error);
        return 'https://weaponsimages.blob.core.windows.net/errors/404.png';
    }
}

export const postWeaponsData = async(model: string, weaponsData: WeaponsData): Promise<number> => {

    const weaponsDataPost = axios.create({
        baseURL: 'https://adminpage-server.azurewebsites.net/api/WeaponsItems',
        method: 'post',
        responseType: 'json',
        timeout: 4000,
    });
    weaponsDataPost.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    try{
        await weaponsDataPost.post(`new-model/${model}`, weaponsData);
        return 201;
    }
    catch(error){
        return 401;
    }
}

export const deleteWeaponsData = async(model: string): Promise<number> => {

    if(model === 'none'){
        return 401;
    }

    const weaponsDataDelete = axios.create({
        baseURL: 'https://adminpage-server.azurewebsites.net/api/WeaponsItems',
        method: 'delete',
        responseType: 'json',
        timeout: 4000,
    });
    weaponsDataDelete.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

    try{
        await weaponsDataDelete.delete(`model/${model}`);
        return 201;
    }
    catch(error){
        return 401;
    }
}