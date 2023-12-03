import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GlobalContext, MyState, Users } from '@/core';
import { BoxInput, Button } from '@/common';
import { SwitchRoutes } from '@/routes';
import { Word } from '@/translations';
import * as classes from './add-user-form.styles';

interface Props {
  addUser: Word["layout"]["addUser"];
};

export const AddUserForm: React.FC<Props> = ({ addUser }) => {
  const { capitalizing ,addOne, state, updateID } = React.useContext<MyState>(GlobalContext);
  const { newID } = state;

  const navigate = useNavigate();
  const [t] = useTranslation("global");

  const [user, setUser] = React.useState<Users>({
    id: newID,
    name: "",
    email: "",
    password: "",
    age: null,
    employee: false,
  });

  const handleChange =
    (key: keyof Users) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = event;
      if (target.value) {
        setUser({ ...user, [key]: event.target.value });
      } else {
        setUser({ ...user, [key]: event.target.checked });
      }
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    addOne(user);
    console.log("User", user);
    updateID();
    navigate(`${SwitchRoutes.listUsers}`);
  };

  React.useEffect(() => {
    setUser((prevUser) => ({ ...prevUser, id: newID }));
  }, [newID]);

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <BoxInput
        styles={classes.boxInput}
        type="text"
        required
        value={user?.name || ""}
        name={capitalizing(t(addUser.name))}
        handleChange={handleChange("name")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="email"
        required
        value={user?.email || ""}
        name={capitalizing(t(addUser.email))}
        handleChange={handleChange("email")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="password"
        required
        value={user?.password || ""}
        name={capitalizing(t(addUser.password))}
        handleChange={handleChange("password")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="number"
        required
        value={user?.age || ""}
        name={capitalizing(t(addUser.age))}
        handleChange={handleChange("age")}
      />
      <div className={classes.boxCheckBox}>
        <BoxInput
          styles={classes.boxInputCheck}
          type="checkbox"
          check={user?.employee}
          name={capitalizing(t(addUser.employee))}
          handleChange={handleChange("employee")}
        />
      </div>
      <Button
        myStyle={classes.btnSubmit}
        text={capitalizing(t(addUser.send))}
        type="submit"
      />
    </form>
  );
};
