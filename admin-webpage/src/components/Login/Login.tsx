import React, { FC, useEffect, useState, useCallback } from 'react';
import { LoginWrapper, LoginForm, LoginMessage } from './Login.styled';
import { fetchToken } from './LoginApi';
import '../styles/styles.css';

interface ILoginModel {
   username: string,
   password: string
}

interface IAuth {
   _handleIsLogin: (flag: boolean) => void
}

const Login: FC<IAuth> = (props) => {

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
      if(_username !== 'none' && _password !== 'none')
      {
         setLoginModel({username: _username, password: _password});
      }  
   }, [_username, _password]);
   
   const handleLogin = async (e: React.FormEvent<HTMLElement>) => {
      e.preventDefault();

      if(loginModel !== null){
         setStatusCode(await fetchToken(loginModel));
         let elements = document.getElementsByClassName('credential');
         (elements[1] as HTMLInputElement).value = '';
      }
   };

   const handleLoginMessage = useCallback(() => {
      if (statusCode === 200){
         setIsLogin(true);
         props._handleIsLogin(true);
         setLoginMessage('Authorized');
         setUsername('none');
         setPassword('none');
      }
      else if (statusCode === 401){
         setIsLogin(false);
         props._handleIsLogin(false);
         setLoginMessage('Unauthorized');
      }
      else{
         setIsLogin(false);
         props._handleIsLogin(false);
         setLoginMessage('');
         setUsername('none');
         setPassword('none');
      }
   }, [statusCode]);

   const handleLogout = () => {
      let elements = document.getElementsByClassName('credential');
      (elements[0] as HTMLInputElement).value = '';
      (elements[1] as HTMLInputElement).value = '';
      localStorage.removeItem('token');
      setStatusCode(0);
   };

   useEffect(() => {
      handleLoginMessage();
   }, [handleLoginMessage]);

   return (
      <LoginWrapper>
         <LoginForm>
            <label className='display-hr-center'>
               User Name:
               <input type="text" className='credential' placeholder={_username} onBlur={handleName} disabled = {isLogin}/>
            </label>
            <label className='display-hr-center'>
                  Password:
                  <input type="text" className='credential' placeholder={_password} onBlur={handlePassword} disabled = {isLogin}/>
            </label>
            <div className='display-hr-center' style={{padding: '5px 0px'}}>
               <div>
                  <button type='button' onClick={handleLogin} disabled = {isLogin}>Login</button>
                  <button type='button' onClick={handleLogout}>Logout</button>
               </div>
               <div style={{textAlign:'center', width: '60%'}}>
                  {loginMessage !== '' ? <LoginMessage isLogin={isLogin}>{loginMessage}</LoginMessage> : <></>}
               </div>
            </div>
         </LoginForm>
      </LoginWrapper>
     );
}

export default Login;
