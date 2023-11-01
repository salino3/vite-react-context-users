import React, { useContext } from "react";
import { GlobalContext, MyState } from "@/core";
import { Title } from "@/common";
import { LinksPage } from "./components";
import * as classes from "./home.styles";

export const HomeComponent: React.FC = () => {
  const { state } = useContext<MyState>(GlobalContext);

  console.log("State: ", state);

  return (
    <classes.Div>
      <Title className={classes.title} txt={`Web page `} span="Los Boquerones" />
      <LinksPage />
    </classes.Div>
  );
};
