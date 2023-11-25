import React from "react";
import { GlobalContext, MyState, Users } from "@/core";
import { Button } from "../button";
import * as classes from "./card.styles";

export const Card: React.FC<Users> = (props) => {
  const { name, email, age, employee, id } = props;

  const {deleteOne} = React.useContext<MyState>(GlobalContext);


  return (
    <div className={classes?.container}>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>Name:</span>
        <span className={classes.valueName}>{name}</span>
      </h3>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>Email:</span>
        <span className={classes.valueName}>{email}</span>
      </h3>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>Age:</span>
        <span className={classes.valueName}>{age}</span>
      </h3>
      <h3 className={classes.h3Card}>
        <span className={classes.keyName}>Employee:</span>
        <span className={classes.valueName}>{employee ? "Yes" : "No"}</span>
      </h3>
      <div className={classes.boxBtns}>
        <Button text={"Update"} myStyle={classes.btnUpdate} />
        <Button
          click={() => deleteOne(id)}
          text={"Delete"}
          myStyle={classes.btnDelete}
        />
      </div>
    </div>
  );
};
