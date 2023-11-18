import { theme } from '@/themes';
import {css} from '@emotion/css';


export const button = css`
  cursor: pointer;
  font-family: cursive;
  font-weight: 600;
  color: ${theme.colors.blues.lapisLazuli};
  padding: 0.5px 7px;
  border-bottom: 1px solid;

  &:active {
    color: ${theme.colors.yellows.saffron}
  }
`;

