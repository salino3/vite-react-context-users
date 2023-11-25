import React  from 'react';
import * as classes from './update-user.styles';
import { UpdateUserScene } from '@/scenes';

export const UpdateUserLayout: React.FC = () => {

    return (
        <classes.Main>
         <UpdateUserScene />
        </classes.Main>
    )
}