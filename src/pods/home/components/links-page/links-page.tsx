import React from "react";
import { Link } from "react-router-dom";
import { SwitchRoutes } from "@/routes";
import * as classes from "./link-page.styles";

export const LinksPage: React.FC = () => {
  return (
    <section className={classes.section}>
      <h2 className={classes.titlePages}>Pages</h2>
      <div className={classes.boxLinks}>
        <Link to={SwitchRoutes?.addUser}>Add User</Link>
        <Link to={SwitchRoutes?.listUsers}>Show Users</Link>
      </div>
    </section>
  );
};
