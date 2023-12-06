import React from 'react';
import { GlobalContext, MyState } from '@/core';
import { GoBack, Title } from '@/common';
import { ModifyUserForm } from './components';
import { wordsPage } from '@/translations';
import { useTranslation } from 'react-i18next';
import * as classes from './update-user.styles'

export const UpdateUser: React.FC = () => {

 const {capitalizing} = React.useContext<MyState>(GlobalContext);

  const [t] = useTranslation("global");
  const {layout} = wordsPage;

    return (
      <div className={classes.root}>
        <Title className={classes.title} txt={`${capitalizing(t(layout.updateUser.title))} `} span={`${capitalizing(t(layout.updateUser.title2))}`} />
        <GoBack text={`${capitalizing(t(layout.updateUser.goBack))}`} /> 
        <ModifyUserForm 
         updateUser={layout.updateUser}
          />
      </div>
    );
}