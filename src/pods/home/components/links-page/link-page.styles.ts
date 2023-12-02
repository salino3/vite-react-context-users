import { theme } from '@/themes';
import {css} from '@emotion/css';


export const section = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: min-content;
  height: 100%;

`;


export const titlePages = css`
  font-size: 26px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: ${theme?.spacing(2)};
  color: ${theme?.colors?.yellows?.jonquil}
  
`;

export const boxLinks = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-weight: 600;
  min-width: 200px;
  padding: ${theme?.spacing(3)} ${theme?.spacing(5)};
  border: solid ${theme?.colors?.blues?.keppel} ${theme?.spacing(1)};
  border-radius: 12px;

  a {
    color: ${theme?.colors?.yellows?.fulvousDarker};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    opacity: 0.6;
  }
`;