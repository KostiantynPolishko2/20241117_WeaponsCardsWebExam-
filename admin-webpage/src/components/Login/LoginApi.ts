import React from 'react';
import axios from "axios";

interface ILoginModel {
    username: string,
    password: string
 }

export const fetchToken = async (loginModel : ILoginModel | null):Promise<number> => {

    try{
        const token = (await axios.post("https://localhost:7185/api/Authenticate/login", loginModel)).data;

        localStorage.setItem("token", token);
        if(token){
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        return 200;
    }
    catch(error){
        // console.log(error);
        return 401;
    }
}