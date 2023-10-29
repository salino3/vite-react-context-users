import React, { useContext } from 'react';
import { GlobalContext, MyState } from '@/core';
import { LinksPage } from './components';
import * as classes from './home.styles';

export const HomeComponent: React.FC = () => {

  const {state} = useContext<MyState>(GlobalContext);

  console.log("State: ", state)

  return (
    <classes.Div>
      <h1>My Page</h1>
      <LinksPage />
    </classes.Div>
  )
}
