import { theme } from '@/themes';
import {css} from '@emotion/css';


export const container = css`

 display: flex;
 flex-direction: column;
 gap: 10px;
 
`;

export const boxInput = css`
  display: flex;
  flex-direction: column;
  gap: 2px;

  input {
    width: auto;
    max-width: 200px;
  }
`;

export const boxInputCheck = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-top: 10px;
  
  input {
      width: 20px;
      height: 20px;
  }
`;


export const btnSubmit = css`
  margin-top: 20px;
  background-color: ${theme.colors.blues.bondiBlue};
  border: none;
  padding: 0px 8px;
  color: #eadeda;
`;



