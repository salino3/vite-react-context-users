import React from 'react';
import { Link } from 'react-router-dom';
import { SwitchRoutes } from '@/routes';
import * as classes from './link-page.styles';

export const LinksPage: React.FC = () => {
    
  return (
    <section className={classes.section}>
        <div>
          <Link to={SwitchRoutes?.addUser}>Add User</Link>
        </div>
    </section>
  )
}
