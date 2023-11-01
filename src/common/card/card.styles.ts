import { theme } from '@/themes';
import {css} from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: groove 5px ${theme.colors.reds.poppy};
  border-radius: 10px;
  padding: 3px 5px;
  color: ${theme.colors.blues.indigoDye};
  font-weight: bold;

  background: #1a2a6c;
  background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
  background: linear-gradient(
    to right,
    #fdbb2d,
    ${theme.background.primary}
  );
`;

export const keyName = css`


color: ${theme.colors.reds.cardinal}
`; 