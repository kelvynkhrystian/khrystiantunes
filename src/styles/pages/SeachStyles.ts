import styled from 'styled-components';
import { Button } from '../ButtonsStyles';

// Página Search

export const SearchPage = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media only screen and (min-width: 601px) {
  }
`;

// Botão da página de Search exportado do componente de botão base

export const SearchButton = styled.button`
  ${Button}
  background-color: #023031;
  color: white;
  margin: 10px;
  padding: 10px;
  margin-bottom: 0;
  width: 80%;
`;
