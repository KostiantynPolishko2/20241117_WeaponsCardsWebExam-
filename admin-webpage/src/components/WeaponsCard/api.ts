import axios from "axios";

export const fetchImagePath = async (asteroidName: string): Promise<string> => { 
    const asteroidImage = axios.create({
        baseURL: 'https://spaceobjectaiserver.azurewebsites.net/api/AsteroidImage/asteroid-image',
        method: 'get',
        responseType: 'json',
    });

    try{
        const responce = await asteroidImage.get(`new ${asteroidName}`);
        console.log(responce);
        return responce.data;
    }
    catch(error){
        console.log('error ', error)
        return 'https://docfiles.blob.core.windows.net/files/images/404.png';
    }
}