import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { theme } from "@/themes";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  height: 100%;
  gap: 20px;
  
`;

export const title = css`
  text-align: center;
  height: min-content;
  min-width: 200px;
  width: min-content;
  color: ${theme.colors.reds.burgundy};
  margin: 30px 0px 20px 0px;
`;

export const boxLinks = css`

 display: flex;
 flex-direction: row;
 gap: ${theme.spacing(5)};
`;

