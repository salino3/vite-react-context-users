import React from 'react';
import { UsersScene } from '@/scenes';
import * as classes from './users.styles';

export const UsersLayout: React.FC = () => {
  return (
    <classes.Main>
        <UsersScene />
    </classes.Main>
  )
}
