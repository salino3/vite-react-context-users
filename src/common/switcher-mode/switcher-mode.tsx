import React from 'react';
import ReactSwitch from "react-switch";
import { useMediaQuery } from "react-responsive";
import { GlobalContext, MyState } from "@/core";
import * as classes from './switcher-mode.styles';


export const SwitcherMode: React.FC = () => {

    const { state, toggleTheme } = React.useContext<MyState>(GlobalContext);
    const { theme } = state;

    const isMobile: boolean = useMediaQuery({ minWidth: "420px" });


  return (
    <section className={classes.switchMode}>
      <label htmlFor="switcher">
        {theme === "light" ? `${isMobile ? "Colorful Mode" : "Colorful"}` : `${isMobile ? "Dark mode" : "Dark"}`}
      </label>
      <ReactSwitch
        name="switcher"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </section>
  );
}
