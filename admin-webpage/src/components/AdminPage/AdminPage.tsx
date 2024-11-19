import React, { FC, useState, createContext } from 'react';
import { AdminPageWrapper } from './AdminPage.styled';
import Login from '../Login/Login';
import WeaponsItemsTable from '../WeaponsItemsTable/WeaponsItemsTable';
import WeaponsCard from '../WeaponsCard/WeaponsCard'

interface IAdminPage {

}

export const HandleNameContext = createContext((e: React.FormEvent<HTMLElement> | null):void=>{});

const AdminPage: FC<IAdminPage> = () => {

   const [name, setName] = useState<string | null>(null);
   const [isShow, setIsShow] = useState<boolean>(true);

   const handleName = (e: React.FormEvent<HTMLElement> | null):void => {
      e?.preventDefault();
      setName(e?.currentTarget.firstElementChild?.nextElementSibling?.textContent || null);
   };

   const handleIsShow = (flag: boolean) => {
      setIsShow(flag);
   };

   return (   
      <AdminPageWrapper>
         <Login _handleIsShow={handleIsShow}/>
         <HandleNameContext.Provider value={handleName}>
            <WeaponsItemsTable flag={isShow}/>
            {/* <WeaponsCard name={name}/> */}
         </HandleNameContext.Provider>
      </AdminPageWrapper>
   );
}

export default AdminPage;
