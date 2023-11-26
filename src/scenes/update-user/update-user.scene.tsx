import React from 'react';
import { NavBar } from '@/common';
import { UpdateUser } from '@/pods';
import * as classes from './update-user.styles';


export const UpdateUserScene: React.FC = () => {

    return (
      <classes.Div>
        <NavBar />
        <UpdateUser />
      </classes.Div>
    );
}