import React from 'react';
import { Users } from '@/core';
import * as classes from './card.styles';


export const Card: React.FC<Users> = (props) => {
  const {name, email, password, age, employee} = props;

  return (
    <div className={classes?.container}>
      <h3>
        <span className={classes.keyName}>Name:&nbsp;</span>
        <span>{name}</span>
      </h3>
      <h3>
        <span className={classes.keyName}>Email: &nbsp;</span>
        <span>{email}</span>
      </h3>
      <h3>
        <span className={classes.keyName}>Age: &nbsp;</span>
        {age}
      </h3>
      <h3>
        <span className={classes.keyName}>Employee: &nbsp;</span>
        {employee ? "Yes" : "No"}
      </h3>
    </div>
  );
}
