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

export const SearchInput = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;
  width: 90%;

  input {
    border: 1px solid #023031;
    border-radius: 5px;
    padding: 10px;
    font-size: large;
    width: 100%;
  }

  input:focus {
    color: #023031;
    outline: 2.5px solid #023031;
  }

  @media only screen and (min-width: 601px) {
    flex-direction: row;
    justify-content: space-around;

    input {
      width: 70%;
    }
  }
`;

export const SearchList = styled.section`
  align-items: center;
  /* border: #023031 3px solid; */
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;

  @media only screen and (min-width: 601px) {
  }
`;

// Botão da página de Search exportado do componente de botão base

export const SearchButton = styled.button`
  ${Button}
  background-color: #023031;
  color: white;
  font-size: large;
  padding: 10px;
  margin-top: 10px;
  width: 100%;

  @media only screen and (min-width: 601px) {
    height: 100%;
    margin: 0;
    width: 20%;
  }
`;
