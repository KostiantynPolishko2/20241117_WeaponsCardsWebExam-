import React, { FC } from 'react';
import { AdminPageWrapper } from './AdminPage.styled';
import Login from '../Login/Login';

interface AdminPageProps {}

const AdminPage: FC<AdminPageProps> = () => (
   <AdminPageWrapper>
      AdminPage Component
      <Login/>
   </AdminPageWrapper>
);

export default AdminPage;
