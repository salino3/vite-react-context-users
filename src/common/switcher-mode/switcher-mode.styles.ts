import {css} from '@emotion/css';

export const switchMode = css`
  display: flex;
  left: 0px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  padding: 5px 10px 5px 10px;
  border: solid 1px;
  border-radius: 20px;
  width: min-content;
  min-width: 180px;

  @media (max-width: 420px) {
    min-width: 100px;
  }
`;


