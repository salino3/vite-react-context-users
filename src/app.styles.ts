import { css } from "@emotion/css";
import styled from "@emotion/styled";


export const Main = styled.main`
  ${(props) => (props.id === "light" ? lightStyles : "")};
`;

const lightStyles = `
  background: #c6ffdd;
  background: -webkit-linear-gradient(to bottom, #f7797d, #fbd786, #c6ffdd);
  background: linear-gradient(to bottom, #f7797d, #fbd786, #c6ffdd);
`;

