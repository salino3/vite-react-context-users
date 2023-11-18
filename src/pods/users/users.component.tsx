import React from 'react';
import { Title, GoBack } from "@/common";
import { List } from './components';
import * as classes from './users.styles';

export const Users: React.FC = () => {
  return (
    <classes.Div>
      <Title
        className={classes.title}
        txt={`User `}
        span="List"
      />
      <GoBack text='Go back' />
      <List />
    </classes.Div>
  );
}
