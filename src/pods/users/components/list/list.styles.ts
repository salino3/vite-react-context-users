import { theme } from '@/themes';
import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  gap: 10px;
  width: 30%;

  h2 {
    color: ${theme.colors.blues.indigoDye};
    font-weight: 600;
    font-family: cursive;
  }
`;