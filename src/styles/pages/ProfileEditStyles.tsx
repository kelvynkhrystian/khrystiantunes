import styled from 'styled-components';
import { Button } from '../ButtonsStyles';

export const ProfileEditPage = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  section {
    align-items: center;
    box-shadow: 5px 5px 15px 5px rgb(190, 190, 190);
    border-radius: 10px;
    display: flex;
    height: 400px;
    justify-content: space-around;
    flex-direction: column;
    padding: 15px;
    width: 90%;

    div {
      align-items: center;
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    input {
      border: none;
      border-radius: 5px;
      box-shadow: 1px 1px 11px 1px rgb(190, 190, 190);
      font-size: medium;
      padding: 10px;
      width: 65%;
    }

    input:focus {
      color: #023031;
      outline: 2.5px solid #023031;
    }

    textarea {
      border: none;
      border-radius: 5px;
      box-shadow: 1px 1px 11px 1px rgb(190, 190, 190);
      font-size: medium;
      outline: #023031;
      padding: 10px;
      width: 65%;
    }

    textarea:focus {
      color: #023031;
      outline: 2.5px solid #023031;
    }
  }

  @media only screen and (min-width: 601px) {
    section {
      height: 420px;
      width: 30%;
    }
  }
`;

// Botão da página de Search exportado do componente de botão base

export const ProfileEditButton = styled.button`
  ${Button}
  background-color: #023031;
  color: white;
  font-size: large;
  padding: 10px;
  margin-top: 10px;
  width: 100%;

  @media only screen and (min-width: 601px) {
    margin: 0;
    width: 100%;
  }
`;
