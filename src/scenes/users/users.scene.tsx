import React from 'react';
import { NavBar } from '@/common';
import { Users } from '@/pods';
import * as classes from './users.styles';

export const UsersScene: React.FC = () => {
  return (
    <classes.Div>
      <NavBar />
      <Users />
    </classes.Div>
  );
}
