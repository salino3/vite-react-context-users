import React from 'react';
import ReactSwitch from "react-switch";
import { GlobalContext, MyState } from "@/core";
import * as classes from './switcher-mode.styles';


export const SwitcherMode: React.FC = () => {

    const { state, toggleTheme } = React.useContext<MyState>(GlobalContext);
    const { theme } = state;

  return (
    <section className={classes.switchMode}>
      <label htmlFor="switcher">
        {theme === "light" ? "Colorful Mode" : "Dark mode"}
      </label>
      <ReactSwitch
        name="switcher"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </section>
  );
}
