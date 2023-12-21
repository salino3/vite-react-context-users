import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext, MyState } from '@/core';
import { Title, GoBack } from "@/common";
import { List } from './components';
import { wordsPage } from '@/translations';
import * as classes from './users.styles';

export const Users: React.FC = () => {

 const { capitalizing } = React.useContext<MyState>(GlobalContext);

 const [t] = useTranslation("global");
 const { layout } = wordsPage;


  return (
    <classes.Div>
      <Title
        className={classes.title}
        txt={`${capitalizing(t(layout.userList.title))} `}
        span={`${capitalizing(t(layout.userList.title2))}`}
      />
      <GoBack text={`${capitalizing(t(layout.userList.goBack))}`} />
      <List 
       userList={layout.userList}
        />
    </classes.Div>
  );
}
