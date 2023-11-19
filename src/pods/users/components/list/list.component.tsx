import React from 'react';
import { GlobalContext, MyState, Users } from '@/core';
import { Card } from '@/common';
import * as classes from './list.styles';

export const List: React.FC = () => {

    const {state} = React.useContext<MyState>(GlobalContext);
    const {users} = state;


  return (
    <div className={classes?.container}>
      {!users || users.length < 1 ? <h2>There is no one in the list...</h2> :
        users.map((user: Users) => {
          return ( 
              <Card
                key={user?.id}
                id={user?.id}
                name={user?.name}
                email={user?.email}
                employee={user?.employee}
                age={user?.age}
              />
          );
        })}
    </div>
  );
}
