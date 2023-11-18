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
    <form className={classes.container} onSubmit={handleSubmit}>
      <BoxInput
        styles={classes.boxInput}
        type="text"
        required
        value={user?.name}
        name="name"
        handleChange={handleChange("name")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="email"
        required
        value={user?.email}
        name="email"
        handleChange={handleChange("email")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="password"
        required
        value={user?.password}
        name="password"
        handleChange={handleChange("password")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="number"
        required
        value={user?.age || ""}
        name="age"
        handleChange={handleChange("age")}
      />
      <BoxInput
        styles={classes.boxInputCheck}
        type="checkbox"
        check={user?.employee}
        name="employee"
        handleChange={handleChange("employee")}
      />
      <Button text="Send" type="submit" />
    </form>
  );
}
