import styled from '@emotion/styled';
import {css} from '@emotion/css';
import { theme } from '@/themes';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overflow: hidden;
  padding: ${theme.paddings.paddingApp};
  min-height: 100%;
  height: 100vh;

  background: #40e0d0;
  background: -webkit-linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080);
  background: linear-gradient(to bottom, #40e0d0, #ff8c00, #ff0080);
`;

