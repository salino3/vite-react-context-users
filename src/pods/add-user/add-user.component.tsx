import React from 'react';
import { AddUserForm } from './components';
import * as classes from './add-user.styles';


export const AddUser: React.FC = () => {

  return (
    <classes.Div>
      <AddUserForm />
    </classes.Div>
  )
}
