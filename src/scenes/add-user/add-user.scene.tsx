import React from 'react';
import { AddUser } from '@/pods';
import * as classes from './add-user.styles';


export const AddUserScene: React.FC = () => {

  return (
    <classes.Div>
      <AddUser />
    </classes.Div>
  );
}
