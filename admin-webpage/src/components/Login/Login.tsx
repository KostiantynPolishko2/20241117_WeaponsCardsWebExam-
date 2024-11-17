import React, { FC, useEffect, useState } from 'react';
import { LoginWrapper } from './Login.styled';
import { fetchToken } from './LoginApi';
import { log } from 'console';

interface ILoginModel {
   username: string,
   password: string
}

const Login: FC = () => {

   const [_username, setUsername] = useState<string>("none");
   const [_password, setPassword] = useState<string>("none");
   const [loginModel, setLoginModel] = useState<ILoginModel | null>(null);

   const handleName = (e: React.FormEvent<HTMLElement>) => {
      setUsername((e.currentTarget as HTMLInputElement).value);
   };

   const handlePassword = (e: React.FormEvent<HTMLElement>) => {
      setPassword((e.currentTarget as HTMLInputElement).value);
   };

   useEffect(() => {
      if(_username != 'none' && _password != 'none')
      {
         setLoginModel({username: _username, password: _password});
         console.log('call form submit', loginModel);
      }  
   }, [_username, _password]);
   

   const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();
      console.log(loginModel);
      if(loginModel != null){
         fetchToken(loginModel);
         setUsername('none');
         setPassword('none');
      }
      console.log(_username);
   }

   return (
      <LoginWrapper>
         <p>Authorization</p>
         <form>
           <label>
              User Name:
              <input type="text" placeholder={_username} onBlur={handleName}/>
           </label>
           <label>
              Password:
              <input type="text" placeholder={_password} onBlur={handlePassword}/>
           </label>
           <button type='button' onClick={handleSubmit}>Login</button>
           <button type='button'>Logout</button>
         </form>
      </LoginWrapper>
     );
}

export default Login;
