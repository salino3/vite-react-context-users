import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { theme } from "@/themes";

export const Main = styled.main`
  padding: ${theme.paddings.paddingApp};
  min-height: 100vh;
  height: 100%;
  
  background: #544a7d;
  background: -webkit-linear-gradient(
    to right,
    #ffd452,
    #544a7d
  ); 
  background: linear-gradient(
    to right,
    #ffd452,
    #544a7d
  );
`;
