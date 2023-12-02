
import React from 'react';
import { GlobalContext, MyState } from './core';
import { AppRoutes } from './routes';
import * as app from './app.styles'


function App() {

     const { state } = React.useContext<MyState>(GlobalContext);

  return (
    <app.Main id={state.theme}>
      <AppRoutes />
    </app.Main>
  );
}

export default App
