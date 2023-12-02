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
  font-family: cursive;
`;

export const titleNav = css`

 display: flex;
 justify-content: center;
 align-items: center;
 color: ${theme.colors.blues.lapisLazuli}
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

export const navbarFuncionalities = css`
  display: grid;
  justify-content: space-around; 
  align-items: center;
  grid-template-areas:
    ". itemA . ."
    " box box box box";
`;

export const itemA = css`
  grid-area: itemA;  
`;

export const itemB = css`
  grid-area: itemB;
`;


export const boxLanguages = css`
  grid-area: box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const itemC = css`
`;

export const itemD = css`
`;







