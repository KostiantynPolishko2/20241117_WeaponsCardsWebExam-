import React, { FC, useState, createContext, useEffect, FunctionComponent, FunctionComponentElement, ReactElement } from 'react';
import { AdminPageWrapper } from './AdminPage.styled';
import Login from '../Login/Login';
import WeaponsItemsTable from '../WeaponsItemsTable/WeaponsItemsTable';
import WeaponsCardFromTable from '../WeaponsCard/WeaponsCard';
import WeaponsCardFromSearch from '../WeaponsCard/WeaponsCard';
import SearchForm from '../SearchForm/SearchForm';
import CardDefault from '../WeaponsCard/CardDefault';
import WeaponsTableDefault from '../WeaponsItemsTable/WeaponsTableDefault';

interface IAdminPage {}

export const HandleNameContext = createContext((e: React.FormEvent<HTMLElement> | null):void=>{});

const AdminPage: FC<IAdminPage> = () => {

   const [modelFromTable, setModeFromTable] = useState<string | null>(null);
   const [modelFromSearch, setModeFromSearch] = useState<string | null>(null);
   const [isLogin, setIsLogin] = useState<boolean>(true);
   const [weaponsCard, setWeaponsCard] = useState<ReactElement<HTMLElement>>(<CardDefault/>);
   const [weaponsTable, setWeaponsTable] = useState<ReactElement<HTMLElement>>(<WeaponsTableDefault/>);
   const [searchForm, setSearchForm] = useState<ReactElement<HTMLElement>>(<></>);

   const handleModelFromTable = (e: React.FormEvent<HTMLElement> | null):void => {
      e?.preventDefault();
      setModeFromTable(e?.currentTarget.firstElementChild?.nextElementSibling?.textContent || null);
      setModeFromSearch(null);
   };

   const handleModelFromSearch = (e: React.FormEvent<HTMLElement>, model: string):void => {
      e?.preventDefault();
      setModeFromSearch(model);
      setModeFromTable(null);
      (e.currentTarget.previousElementSibling as HTMLInputElement).value = '';
   };

   const handleIsLogin = (flag: boolean) => {
      setIsLogin(flag);
   };

   const displayWeaponsCard = (): void => {
      if (modelFromTable != null && modelFromSearch == null) {    
         setWeaponsCard(<WeaponsCardFromTable model={modelFromTable}/>);
      }
      else if (modelFromTable == null && modelFromSearch != null){     
         setWeaponsCard(<WeaponsCardFromSearch model={modelFromSearch}/>);
      }
      else if (!isLogin){
         setModeFromSearch(null);
         setModeFromTable(null);
         setWeaponsCard(<CardDefault/>);
      }
   };

   const displayPageContent = ():void => {
      if(isLogin){
         setWeaponsTable(<WeaponsItemsTable/>);
         setSearchForm(<SearchForm isLogin={!isLogin} _handleModeFromSearch={handleModelFromSearch}/>);
      }
      else{
         setWeaponsTable(<WeaponsTableDefault/>);
         setSearchForm(<></>);
         setModeFromSearch(null);
         setModeFromTable(null);
      }
   };

   useEffect(()=>{
      displayPageContent();
   }, [isLogin])

   useEffect(()=>{
      displayWeaponsCard();
   }, [modelFromTable, modelFromSearch]);

   return (   
      <AdminPageWrapper>
         <Login _handleIsLogin={handleIsLogin}/>
         {searchForm}
         <HandleNameContext.Provider value={handleModelFromTable}>
            {weaponsTable}
         </HandleNameContext.Provider>
         {weaponsCard}
      </AdminPageWrapper>
   );
}

export default AdminPage;
