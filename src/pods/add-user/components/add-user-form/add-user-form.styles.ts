import { theme } from '@/themes';
import {css} from '@emotion/css';


export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50% ${theme.spacing(5)};
  width: 100%;

  min-width: ${theme.spacing(75)};
  height: ${theme.spacing(125)};
  width: 350px;
  margin-top: 5px;

  background: #355c7d;
  background: -webkit-linear-gradient(to top, #c06c84, #6c5b7b, #355c7d);
  background: linear-gradient(to top, #c06c84, #6c5b7b, #355c7d);

  background-size: 100% 135%;
  background-position: center bottom;

  @media (min-width: 725px) {
    width: ${theme.spacing(175)};
  }

  @media (min-width: 1024px) {
    width: ${theme.spacing(250)};
  }
`;

export const boxInput = css`
  display: flex;
  flex-direction: column;
  color: ${theme.colors.blues.emerald};
  gap: 2px;

  input {
    width: auto;
    max-width: ${theme.spacing(50)};
    padding: 2px;
    padding-left: 3px;
    border-radius: 5px;
  }
`;

export const boxCheckBox = css`
  width: ${theme.spacing(50)};
  margin-bottom: ${theme.spacing(5)};
`; 

export const boxInputCheck = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-self: flex-start;
  color: ${theme.colors.blues.keppel};
  margin-bottom: ${theme.spacing(5)};

  gap: ${theme.spacing(5)};
  margin-top: ${theme.spacing(2.5)};

  input {
    align-self: flex-start;
    width: ${theme.spacing(5)};
    height: ${theme.spacing(5)};
    cursor: pointer;
  }
`;

export const btnSubmit = css`
  background-color: ${theme.colors.blues.bondiBlue};
  border: none;
  padding: 0px ${theme.spacing(2)};
  color: #eadeda;
`;



