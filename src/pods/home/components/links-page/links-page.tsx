import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { GlobalContext, MyState } from "@/core";
import { wordsPage } from "@/translations";
import { SwitchRoutes } from "@/routes";
import * as classes from "./link-page.styles";

export const LinksPage: React.FC = () => {

    const { capitalizing } = React.useContext<MyState>(GlobalContext);

    const [t] = useTranslation("global");
    const { layout } = wordsPage;

  return (
    <section className={classes.section}>
      <h2 className={classes.titlePages}>{capitalizing(t(layout.pages))}</h2>
      <div className={classes.boxLinks}>
        <Link to={SwitchRoutes?.addUser}>
          {capitalizing(t(layout.addUser))}
        </Link>
        <Link to={SwitchRoutes?.listUsers}>
          {capitalizing(t(layout.showUsers))}
        </Link>
      </div>
    </section>
  );
};
