import styled from 'styled-components';
import { Button } from './ButtonsStyles';

// Página principal de login

export const LoginPage = styled.article`
  align-items: center;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  width: 100%;

  section {
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px rgb(190, 190, 190);
    display: flex;
    flex-direction: column;
    height: 30%;
    justify-content: center;
    width: 80%;
  }

  input {
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 2px 2px rgb(190, 190, 190);
    margin: 1px;
    padding: 10px 0;
    text-align: center;
    width: 80%;
  }

  input:focus {
    color: #023031;
    outline: 2.5px solid #023031;
  }

  img {
    margin-bottom: 50px;
    width: 250px;
  }

  @media only screen and (min-width: 601px) {
    section {
      height: 30%;
      width: 25%;
    }
  }
`;

// Botão da página de login exportado do componente de botão base

export const LoginButton = styled.button`
  ${Button}
  background-color: #023031;
  color: white;
  margin: 10px;
  padding: 10px;
  margin-bottom: 0;
  width: 80%;
`;
