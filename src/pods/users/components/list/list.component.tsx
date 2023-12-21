import React from 'react';
import { GlobalContext, MyState, Users } from '@/core';
import { Card } from '@/common';
import * as classes from './list.styles';
import { Word } from '@/translations';
import { useTranslation } from 'react-i18next';

interface Props {
  userList: Word['layout']['userList'];
};

export const List: React.FC<Props> = ({userList}) => {

    const {capitalizing, state} = React.useContext<MyState>(GlobalContext);
    const {users} = state;

    const [t] = useTranslation("global");


  return (
    <div className={classes?.container}>
      {!users || users.length < 1 ? <h2>{`${capitalizing(t(userList.noOne))}`}...</h2> :
        users.map((user: Users) => {
          return ( 
              <Card
              userList={userList}
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
