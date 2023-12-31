import { theme } from '@/themes';
import {css} from '@emotion/css';

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  border: groove 5px ${theme.colors.reds.poppy};
  border-radius: 20px 100px;
  padding: 10px 20px;
  color: ${theme.colors.blues.indigoDye};
  background: #1a2a6c;
  background: -webkit-linear-gradient(to right, #fdbb2d, #b21f1f, #1a2a6c);
  background: linear-gradient(to right, #fdbb2d, ${theme.background.primary});
  font-weight: bold;
  min-width: 300px;
  width: auto;
 
`;

  export const h3Card = css`
  
  display: flex;
  flex-direction: row;
  gap: 10px;
    width: 100%;
  `;


export const keyName = css`
display: flex;
 justify-content: flex-end;
  width: 100%;
  color: ${theme.colors.reds.cardinal};
`; 

export const valueName = css`
  width: 100%;
`;

export const boxBtns = css`

 display: flex;
 flex-direction: row;
 gap: 25px;
`;

export const btnUpdate = css`
  color: ${theme.colors.blues.cerulean};
  background: transparent;
`;

export const btnDelete = css`
  color: ${theme.colors.reds.poppy};
  background: transparent;
`;
   