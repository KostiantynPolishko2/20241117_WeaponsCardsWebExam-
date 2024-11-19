import React, { FC, useState, createContext } from 'react';
import { AdminPageWrapper } from './AdminPage.styled';
import Login from '../Login/Login';
import WeaponsItemsTable from '../WeaponsItemsTable/WeaponsItemsTable';
import WeaponsCard from '../WeaponsCard/WeaponsCard'
import SearchForm from '../SearchForm/SearchForm';

interface IAdminPage {

}

export const HandleNameContext = createContext((e: React.FormEvent<HTMLElement> | null):void=>{});

const AdminPage: FC<IAdminPage> = () => {

   const [model, setModel] = useState<string | null>(null);
   const [isLogin, setIsLogin] = useState<boolean>(true);

   const handleName = (e: React.FormEvent<HTMLElement> | null):void => {
      e?.preventDefault();
      setModel(e?.currentTarget.firstElementChild?.nextElementSibling?.textContent || null);
      console.log(model);
   };

   const handleIsLogin = (flag: boolean) => {
      setIsLogin(flag);
   };

   return (   
      <AdminPageWrapper>
         <Login _handleIsLogin={handleIsLogin}/>
         <SearchForm isLogin={!isLogin}/>
         <HandleNameContext.Provider value={handleName}>
            <WeaponsItemsTable flag={isLogin}/>
            <WeaponsCard model={model}/>
         </HandleNameContext.Provider>
      </AdminPageWrapper>
   );
}

export default AdminPage;
