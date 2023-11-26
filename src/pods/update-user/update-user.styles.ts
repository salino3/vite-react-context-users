import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { theme } from "@/themes";


export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing(5)};

`;

export const title = css`
  text-align: center;
  height: min-content;
  min-width: ${theme.spacing(50)};
  width: min-content;
  color: ${theme.colors.reds.burgundy};
  margin: ${theme.spacing(4)} 0px;
`;