import React from 'react';
import { GlobalContext, MyState } from '@/core';
import { UsersScene } from '@/scenes';
import * as classes from './users.styles';

export const UsersLayout: React.FC = () => {

    const { state } = React.useContext<MyState>(GlobalContext);

  return (
    <classes.Main id={state.theme}>
      <UsersScene />
    </classes.Main>
  );
}
