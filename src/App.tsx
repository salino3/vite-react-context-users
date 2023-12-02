
import React from 'react';
import { AppRoutes } from './routes';
import * as app from './app.styles'
import { GlobalContext, MyState } from './core';


function App() {

     const { state } = React.useContext<MyState>(GlobalContext);


  return (
    <app.Main id={state.theme}>
      <AppRoutes />
    </app.Main>
  );
}

export default App
