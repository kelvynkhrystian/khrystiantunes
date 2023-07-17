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
    box-shadow: 5px 5px 5px 5px rgb(190, 190, 190);
    border-radius: 10px;
    display: flex;
    height: 400px;
    justify-content: space-around;
    flex-direction: column;
    padding: 15px;
    width: 80%;

    img {
      border-radius: 10px;
      margin: 5px;
      width: 200px;
    }

    div {
      display: flex;
      justify-content: space-around;
      width: 100%;
    }

    a {
      align-items: center;
      background-color: #023031;
      border: none;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      font-size: large;
      padding: 10px 5px;
      text-align: center;
      width: 45%;
    }

    a:active {
      scale: 0.95;
    }

    a:nth-child(2) {
      background-color: #b80808;
    }
  }

  @media only screen and (min-width: 601px) {
    section {
      height: 420px;
      width: 30%;
    }
  }
`;
