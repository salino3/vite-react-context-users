import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobalContext, MyState } from '@/core';
import { SwitchRoutes } from '@/routes';
import { SwitcherMode } from '../switcher-mode';
import * as classes from './navbar.styles';
import { translate } from '@/translations/en';

export const NavBar: React.FC = () => {

  const {capitalizing} = React.useContext<MyState>(GlobalContext);

    const [t, i18n] = useTranslation("global");

    const changeLanguage = (language: string) => {
      i18n.changeLanguage(language);
      sessionStorage.setItem("selectedLanguage", language);
    };

    return (
      <header className={classes.root}>
        <h3 className={classes.titleNav}>Los Boquerones</h3>
        <nav className={classes.navbarLinks}>
          <Link to={SwitchRoutes.root}>{capitalizing(t("header.home"))}</Link>
          <Link to={SwitchRoutes.addUser}>{capitalizing(t("header.addUser"))}</Link>
          <Link to={SwitchRoutes.listUsers}>{capitalizing(t("header.userList"))}</Link>
        </nav>
        <nav className={classes.navbarFuncionalities}>
          <div className={classes.itemA}>
            <SwitcherMode />
          </div>

          <div className={classes.boxLanguages}>
            <div className={classes.itemB} onClick={() => changeLanguage("en")}>
              English
            </div>
            <div className={classes.itemC} onClick={() => changeLanguage("es")}>
              Spanish
            </div>
            <div className={classes.itemD} onClick={() => changeLanguage("it")}>
              Italian
            </div>
          </div>
        </nav>
      </header>
    );
}