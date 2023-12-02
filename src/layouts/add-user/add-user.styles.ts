import styled from '@emotion/styled';
import { theme } from '@/themes';

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
  background: #40e0d0;
  background: -webkit-linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080);
  background: linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080);
`;