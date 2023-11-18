import React from 'react';
import * as classes from './add-user-form.styles';

export const AddUserForm: React.FC = () => {

  return (
    <form>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' />
        </div>
    </form>
  )
}
