import React from "react";
import { Title } from "@/common";
import { useTranslation } from "react-i18next";
import { GlobalContext, MyState } from "@/core";
import { LinksPage } from "./components";
import { wordsPage } from "@/translations";
import * as classes from "./home.styles";

export const HomeComponent: React.FC = () => {

   const { capitalizing } = React.useContext<MyState>(GlobalContext);

   const [t] = useTranslation("global");
   const { layout } = wordsPage;

   
  return (
    <classes.Div>
      <Title className={classes.title} txt={`${capitalizing(t(layout.home.title))} `} span={`${capitalizing(t(layout.home.title2))}`}/>
      <LinksPage 
       home={layout.home}
       capitalizing={capitalizing}
        />
    </classes.Div>
  );
};
