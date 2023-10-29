import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { AddUserLayout, HomeLayout, UsersLayout } from '@/layouts';
import { SwitchRoutes } from './interface';

export const AppRoutes: React.FC = () => {
  
  return (
    <>
      <Routes>
        <Route path={SwitchRoutes?.root} element={<HomeLayout />} />
        <Route path={SwitchRoutes?.addUser} element={<AddUserLayout />} />
        <Route path={SwitchRoutes?.listUsers} element={<UsersLayout />} />
      </Routes>
    </>
  );
}
