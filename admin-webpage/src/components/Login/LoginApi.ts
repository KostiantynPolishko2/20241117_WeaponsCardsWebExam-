import React from 'react';
import axios from "axios";

interface ILoginModel {
    username: string,
    password: string
 }

export const fetchToken = async (loginModel : ILoginModel | null):Promise<number> => {

    try{
        const token = (await axios.post("https://authorization-client.azurewebsites.net/api/Authenticate/login", loginModel)).data;

        localStorage.setItem("token", token);

        return 200;
    }
    catch(error){
        return 401;
    }
}