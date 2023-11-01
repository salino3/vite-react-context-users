import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { theme } from "@/themes";

export const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  `;

export const title = css`
  text-align: center;
  height: min-content;
  min-width: 200px;
  width: min-content;
  color: ${theme.colors.reds.burgundy};
  margin: 30px 0px;
`;


