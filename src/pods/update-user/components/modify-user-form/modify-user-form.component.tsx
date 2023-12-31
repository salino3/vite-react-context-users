import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobalContext, MyState, Users } from "@/core";
import { BoxInput, Button } from "@/common";
import { Word } from "@/translations";
import { SwitchRoutes } from "@/routes";
import * as classes from "./modify-user-form.styles";

interface Props {
  updateUser: Word["layout"]["updateUser"];
};


export const ModifyUserForm: React.FC<Props> = ({updateUser}) => {
  const {capitalizing, updateUser: updatingUser, state} = React.useContext<MyState>(GlobalContext);

  const [t] = useTranslation("global");
  const navigate = useNavigate();
  const params = useParams();

  const oneUser = state?.users.filter(
    (user: Users) => user?.id === Number(params.id))[0];

  const [user, setUser] = React.useState<Users>(oneUser);
console.log(user)

  const handleChange = (key: keyof Users) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const { target } = event;
      if (target.value) {
        setUser({ ...user, [key]: event.target.value });
      } else {
        setUser({ ...user, [key]: event.target.checked });
      };
    };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> | undefined = (
    event: React.FormEvent<HTMLFormElement>
     ) => {event.preventDefault();

    updatingUser(user);
    console.log("User", user);
    navigate(`${SwitchRoutes.listUsers}`);
  };



  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <BoxInput
        styles={classes.boxInput}
        type="text"
        required
        value={user?.name || ""}
        name={`${capitalizing(t(updateUser.name))}`}
        handleChange={handleChange("name")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="email"
        required
        value={user?.email || ""}
        name={`${capitalizing(t(updateUser.email))}`}
        handleChange={handleChange("email")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="password"
        required
        value={user?.password || ""}
        name={`${capitalizing(t(updateUser.password))}`}
        handleChange={handleChange("password")}
      />
      <BoxInput
        styles={classes.boxInput}
        type="number"
        required
        value={user?.age || ""}
        name={`${capitalizing(t(updateUser.age))}`}
        handleChange={handleChange("age")}
      />
      <div className={classes.boxCheckBox}>
        <BoxInput
          styles={classes.boxInputCheck}
          type="checkbox"
          check={user?.employee}
          name={`${capitalizing(t(updateUser.employee))}`}
          handleChange={handleChange("employee")}
        />
      </div>
      <Button
        myStyle={classes.btnSubmit}
        text={`${capitalizing(t(updateUser.send))}`}
        type="submit"
      />
    </form>
  );
};
