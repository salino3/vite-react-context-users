import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { theme } from "@/themes";

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing(12)};
  height: 100%;
  margin-top: 70px;
  @media (max-width: 1000px) {
    margin-top: 90px;
  }
`;

export const title = css`
  color: gray;
  margin-bottom: 10px;
`;