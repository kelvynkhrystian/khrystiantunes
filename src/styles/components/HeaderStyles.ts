import styled from 'styled-components';

// Carregamento

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
  }

  @media only screen and (min-width: 601px) {
    section {
      justify-content: center;
    }
  }
`;
