import { theme } from "@/themes";
import { css } from "@emotion/css";

export const root = css`
  display: grid;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: 1fr;
  border: solid blue;
  height: ${theme.spacing(15)};
  position: fixed;
  top: 0;
  width: 98%;
  justify-self: center;
  margin-top: 10px;
`;

export const titleNav = css`

 border: solid;
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const navbarLinks = css`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 60px;
  justify-self: center;
  justify-items: center;
  align-items: center;
  max-width: 500px;
`;
