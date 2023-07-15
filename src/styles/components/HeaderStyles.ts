import styled from 'styled-components';

// Componente Header

export const HeaderStyles = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;

  section {
    align-items: center;
    background-color: #023031;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  section > div {
    align-items: center;
    background-color: white;
    border-radius: 50px;
    color: #023031;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 20px;
    padding: 5px;

    p {
      align-items: center;
      display: flex;
      font-size: 1em;
      margin: 0 10px;
    }

    img {
      margin: 1px;
      width: 30px;
    }
  }

  section > img {
    margin: 20px;
    width: 150px;
  }

  nav {
    align-items: center;
    background-color: white;
    color: #023031;
    display: flex;
    justify-content: space-around;
    width: 100%;

    a {
      align-items: center;
      background-color: #f0f2f5;
      box-shadow: 2px 2px 2px 2px rgb(190, 190, 190);
      border-radius: 5px;
      color: #1a8a61;
      display: flex;
      justify-content: center;
      margin-top: 10px;
      padding: 10px 2px;
      text-decoration: none;
      transition: background-color 0.5s ease;
      width: 30%;
    }

    a:active {
      scale: 0.95;
    }

    a:hover {
      background-color: #1a8a61;
      color: #f0f2f5;
    }
  }

  @media only screen and (min-width: 601px) {
    section {
      /* justify-content: center; */
    }
  }
`;
