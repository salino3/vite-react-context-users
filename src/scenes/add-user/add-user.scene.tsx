import React from 'react';
import { NavBar } from '@/common';
import { AddUser } from '@/pods';
import * as classes from './add-user.styles';


export const AddUserScene: React.FC = () => {

  return (
    <classes.Div>
      <NavBar />
      <AddUser />
    </classes.Div>
  );
}
