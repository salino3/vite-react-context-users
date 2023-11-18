import React from "react";
import { cx } from "@emotion/css";
import * as classes from "./button.styles";

interface Props {
  text: string;
  myStyle?: string;
  divHeight?: number;
  btnHeight?: number;
  divWidth?: number;
  click?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};


export const Button: React.FC<Props> = (props) => {
  const { text, myStyle, btnHeight = 30, divHeight = 30, divWidth = 70, click } = props;

  return (
    <div className={classes.container(divHeight, divWidth)}>
      <button onClick={click} className={cx(classes.btn(btnHeight), `${myStyle}`)}>
        {text}
      </button>
    </div>
  );
};
