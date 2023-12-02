import React  from 'react';
import { GlobalContext, MyState } from '@/core';
import { UpdateUserScene } from '@/scenes';
import * as classes from './update-user.styles';

export const UpdateUserLayout: React.FC = () => {

    const { state } = React.useContext<MyState>(GlobalContext);

    return (
      <classes.Main id={state.theme}>
        <UpdateUserScene />
      </classes.Main>
    );
}