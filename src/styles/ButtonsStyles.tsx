import { css } from 'styled-components';

export const Button = css`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 0;
  margin: 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:active {
    scale: 0.95;
  }
`;
