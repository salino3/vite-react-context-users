import React from "react";
import { Title } from "@/common";
import { LinksPage } from "./components";
import * as classes from "./home.styles";

export const HomeComponent: React.FC = () => {


  return (
    <classes.Div>
      <Title className={classes.title} txt={`Web `} span="Los Boquerones" />
      <LinksPage />
    </classes.Div>
  );
};
