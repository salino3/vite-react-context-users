import styled from "@emotion/styled";
import {css} from '@emotion/css';
import { theme } from "@/themes";


export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  overflow: hidden;

  padding: ${theme.paddings.paddingApp};
  min-height: 100%;
  height: 100vh;
  ${(props) => (props.id === "light" ? lightStyles : "")};
`;

const lightStyles = `
  background: #ee0979;
  background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
  background: linear-gradient(to right, #ff6a00, #ee0979);`;