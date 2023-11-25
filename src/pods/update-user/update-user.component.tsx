import React from 'react';
import { GoBack, Title } from '@/common';
import { ModifyUserForm } from './components';
import * as classes from './update-user.styles'

export const UpdateUser: React.FC = () => {

    return (
      <div className={classes.root}>
        <Title className={classes.title} txt={`Update `} span="User" />
        <GoBack text="Go back" /> 
        <ModifyUserForm />
      </div>
    );
}