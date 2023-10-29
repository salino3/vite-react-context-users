import React from 'react';
import { AddUserScene } from '@/scenes';
import * as classes from './add-user.styles';

export const AddUserLayout: React.FC = () => {
  return (
    <classes.Main >
      <AddUserScene />
    </classes.Main>
  )
}
