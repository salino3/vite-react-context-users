import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { theme } from "@/themes";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 70px;
  @media (max-width: 1000px) {
    margin-top: 100px;
  }
`;

export const title = css`
  text-align: center;
  height: min-content;
  min-width: ${theme.spacing(50)};
  width: min-content;
  color: ${theme.colors.reds.burgundy};
  margin: 30px 0px;
`;


