import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobalContext, MyState, Users } from "@/core";
import { Word } from "@/translations";
import { SwitchRoutes } from "@/routes";
import { Button } from "../button";
import * as classes from "./card.styles";

interface Props {
  userList: Word["layout"]["userList"];
  name: Users["name"];
  email: Users["email"];
  age: Users["age"];
  employee?: Users["employee"];
  id: Users["id"];
};

export const Card: React.FC<Props> = (props) => {
  const { name, email, age, employee, id, userList } = props;

  const { capitalizing, deleteOne } = React.useContext<MyState>(GlobalContext);

  const [t] = useTranslation("global");
  const navigate = useNavigate();

  return (
    <div className={classes?.container}>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>
          {`${capitalizing(t(userList.name))}`}:
        </span>
        <span className={classes.valueName}>{name}</span>
      </h3>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>
          {`${capitalizing(t(userList.email))}`}:
        </span>
        <span className={classes.valueName}>{email}</span>
      </h3>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>
          {`${capitalizing(t(userList.age))}`}:
        </span>
        <span className={classes.valueName}>{age}</span>
      </h3>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>
          {`${capitalizing(t(userList.employee))}`}:
        </span>
        <span className={classes.valueName}>
          {employee
            ? `${capitalizing(t(userList.yes))}`
            : `${capitalizing(t(userList.no))}`}
        </span>
      </h3>
      <div className={classes.boxBtns}>
        <Button
          click={() => navigate(`${SwitchRoutes.updateUser}/${id}`)}
          text={`${capitalizing(t(userList.update))}`}
          myStyle={classes.btnUpdate}
        />
        <Button
          click={() => deleteOne(id)}
          text={`${capitalizing(t(userList.delete))}`}
          myStyle={classes.btnDelete}
        />
      </div>
    </div>
  );
};
