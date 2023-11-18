import React from 'react';
import { GlobalContext, MyState, Users } from '@/core';
import { BoxInput, Button } from '@/common';
import * as classes from './add-user-form.styles';

export const AddUserForm: React.FC = () => {

  const {state} = React.useContext<MyState>(GlobalContext);
  const {users} = state;

  const [user, setUser] = React.useState<Users>({
     name: '',
     email: '',
     password: '',
     age: null,
     employee: false
  });

  const handleChange =
    (key: keyof Users) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
         const {target} = event;
        if(target.value){
        setUser({ ...user, [key]: event.target.value });
      }else{
        setUser({ ...user, [key]: event.target.checked });
      };
   };

 const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
   event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     console.log("User", user)
   };

  return (
    <form onSubmit={handleSubmit}>
      <BoxInput
        type="text"
        required
        value={user?.name}
        name="name"
        handleChange={handleChange("name")}
      />
      <BoxInput
        type="email"
        required
        value={user?.email}
        name="email"
        handleChange={handleChange("email")}
      />
      <BoxInput
        type="password"
        required
        value={user?.password}
        name="password"
        handleChange={handleChange("password")}
      />
      <BoxInput
        type="number"
        required
        value={user?.age || ""}
        name="age"
        handleChange={handleChange("age")}
      />
      <BoxInput
        type="checkbox"
        check={user?.employee}
        name="employee"
        handleChange={handleChange("employee")}
      />
      <Button text="Send" type="submit" />
    </form>
  );
}
