import React from 'react';
import { NavBar } from '@/common';
import { HomeComponent } from '@/pods';
import * as classes from './home.styles';

export const HomeScene: React.FC = () => {
  return (
    <classes.Div>
      <NavBar />
      <HomeComponent />
    </classes.Div>
  );
}
