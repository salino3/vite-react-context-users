import React from 'react';
import { useTranslation } from 'react-i18next';
import { GlobalContext, MyState } from '@/core';
import { GoBack, Title } from '@/common';
import { AddUserForm } from './components';
import { wordsPage } from '@/translations';
import { SwitchRoutes } from '@/routes';
import * as classes from './add-user.styles';


export const AddUser: React.FC = () => {

   const { capitalizing } = React.useContext<MyState>(GlobalContext);

   const [t] = useTranslation("global");
   const { layout } = wordsPage;

  return (
    <classes.Div>
      <Title
        className={classes.title}
        txt={`${capitalizing(t(layout.addUser.title))} `}
        span={capitalizing(t(layout.addUser.title2))}
      />
      <div className={classes.boxLinks}>
        <GoBack text={capitalizing(t(layout.addUser.goBack))} />
        <GoBack
          pageTxt={SwitchRoutes?.listUsers}
          text={capitalizing(t(layout.addUser.goList))}
        />
      </div>
      <AddUserForm addUser={layout.addUser} />
    </classes.Div>
  );
}
