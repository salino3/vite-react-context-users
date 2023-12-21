import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Word } from "@/translations";
import { SwitchRoutes } from "@/routes";
import * as classes from "./link-page.styles";

interface Props {
  home: Word["layout"]["home"];
  capitalizing: (str: string) => string;
};

export const LinksPage: React.FC<Props> = ({home, capitalizing}) => {

    const [t] = useTranslation("global");
  
  return (
    <section className={classes.section}>
      <h2 className={classes.titlePages}>{capitalizing(t(home.pages))}</h2>
      <div className={classes.boxLinks}>
        <Link to={SwitchRoutes?.addUser}>
          {capitalizing(t(home.addUser))}
        </Link>
        <Link to={SwitchRoutes?.listUsers}>
          {capitalizing(t(home.showUsers))}
        </Link>
      </div>
    </section>
  );
};
