import React from "react";
import axios from "axios";

export const fetchCard = async (model: string, e: React.FormEvent<HTMLElement>): Promise<string> => { 

    (e.currentTarget.previousElementSibling as HTMLInputElement).value = '';

    const weaponsCardRequest = axios.create({
        baseURL: 'http://localhost:5144/api/WeaponsItems',
        method: 'get',
        responseType: 'json',
        headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        },
        timeout: 4000
    });

    try{
        const responce = await weaponsCardRequest.get(`model/${model}`);
        // console.log('responce data: ', responce.data);
        return responce.data;
    }
    catch(error){
        // console.log('error: ', error)
        return 'https://docfiles.blob.core.windows.net/files/images/404.png';
    }
}