import React from 'react';
import { Link } from 'react-router-dom';
import * as classes from './navbar.styles';
import { SwitchRoutes } from '@/routes';

export const NavBar: React.FC = () => {

    return (
      <header className={classes.root}>
        <h3 className={classes.titleNav}>Los Boquerones</h3>
        <nav className={classes.navbarLinks}>
          <Link to={SwitchRoutes.root}>Home</Link>
          <Link to={SwitchRoutes.addUser}>Add User</Link>
          <Link to={SwitchRoutes.listUsers}>Users List</Link>
        </nav>
        <nav>
          <div> Dark Mode</div>
          <div> colorful Mode</div>
        </nav>
      </header>
    );
}