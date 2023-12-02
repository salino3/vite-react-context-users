import React from 'react';
import { GlobalContext, MyState } from '@/core';
import { AddUserScene } from '@/scenes';
import * as classes from './add-user.styles';

export const AddUserLayout: React.FC = () => {

    const { state } = React.useContext<MyState>(GlobalContext);

  return (
    <classes.Main id={state.theme}>
      <AddUserScene />
    </classes.Main>
  );
}
