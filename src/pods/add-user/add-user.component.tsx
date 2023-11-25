import React from 'react';
import { GoBack, Title } from '@/common';
import { AddUserForm } from './components';
import { SwitchRoutes } from '@/routes';
import * as classes from './add-user.styles';


export const AddUser: React.FC = () => {

  return (
    <classes.Div>
      <Title className={classes.title} txt={`User `} span="Form" />
      <div className={classes.boxLinks}>
      <GoBack text="Go Back" />
      <GoBack pageTxt={SwitchRoutes?.listUsers} text="Go to list" />
      </div>
      <AddUserForm />
    </classes.Div>
  );
}
