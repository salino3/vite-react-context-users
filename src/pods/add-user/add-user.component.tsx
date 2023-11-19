import React from 'react';
import { GoBack, Title } from '@/common';
import { AddUserForm } from './components';
import * as classes from './add-user.styles';


export const AddUser: React.FC = () => {

  return (
    <classes.Div>
        <Title className={classes.title} txt={`User `} span="List" />
        <GoBack text="Go Back" />
        <AddUserForm />
    </classes.Div>
  );
}
