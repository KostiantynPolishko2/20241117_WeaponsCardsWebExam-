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
   const [isLogin, setIsLogin] = useState<boolean>(false);
   const [statusCode, setStatusCode] = useState<number>(0);
   const [loginMessage, setLoginMessage] = useState<string>('');

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
   
   const handleLogin = async (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();

      if(loginModel != null){
         setStatusCode(await fetchToken(loginModel));
      }
   }

   const handleLoginMessage = () => {
      if (statusCode == 200){
         setIsLogin(true);
         setLoginMessage('Authorized');
      }
      else if (statusCode == 401){
         setIsLogin(false);
         setLoginMessage('Unauthorized');
      }
      else{
         setIsLogin(false);
         setLoginMessage('');
      }
   }

   useEffect(() => {handleLoginMessage();}, [statusCode]);

   const handleLogout = () => {
      localStorage.removeItem('token')
      setStatusCode(0);
      setUsername('none');
      setPassword('none');
   }

   return (
      <LoginWrapper>
         <p>Authorization</p>
         <form>
            <label>
               User Name:
               <input type="text" placeholder={_username} onBlur={handleName} disabled = {isLogin}/>
            </label>
            <label>
               Password:
               <input type="text" placeholder={_password} onBlur={handlePassword} disabled = {isLogin}/>
            </label>
            <button type='button' onClick={handleLogin} disabled = {isLogin}>Login</button>
            <button type='button' onClick={handleLogout}>Logout</button>
            <p>{loginMessage}</p>
         </form>
      </LoginWrapper>
     );
}

export default Login;
