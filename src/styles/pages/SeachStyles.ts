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
  margin-bottom: 25px;
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
    justify-content: space-evenly;
    width: 100%;

    input {
      width: 72%;
    }
  }
`;

export const SearchList = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  /* background-color: aqua; */
  width: 90%;

  > section {
    text-align: center;
    width: 100%;

    > p {
      margin-bottom: 25px;
    }
  }

  article {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }

  @media only screen and (min-width: 601px) {
  }
`;

export const AlbumCard = styled.section`
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 5px rgb(190, 190, 190);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300px;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
  width: 180px;

  a {
    background-color: #023031;
    border: none;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    font-size: large;
    padding: 10px;
    margin-top: 10px;
    width: 90%;
  }

  a:active {
    scale: 0.95;
  }

  article {
    background-color: red;
  }

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
    width: 22%;
  }
`;
