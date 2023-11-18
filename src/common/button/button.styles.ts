import {css} from '@emotion/css';
import { theme } from '@/themes';


export const container = (divHeight: number, divWidth: number) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${divHeight}px;
  width: ${divWidth}px;
`;

export const btn = (btnHeight: number) => css`
  border: solid;
  padding: 3px;
  border-radius: 5px;
  height: ${btnHeight}px;
  cursor: pointer;

  &:active {
    font-size: 15px;
    opacity: 0.8;
    margin-top: 3%;
    height: calc(${btnHeight}px - 10%);
    padding: 2.5px;


    box-shadow: 7px 2px 44px 15px rgba(255, 218, 0, 0.75);
    -webkit-box-shadow: 7px 2px 44px 15px rgba(255, 218, 0, 0.75);
    -moz-box-shadow: 7px 2px 44px 15px rgba(255, 218, 0, 0.75);
  }
`;




