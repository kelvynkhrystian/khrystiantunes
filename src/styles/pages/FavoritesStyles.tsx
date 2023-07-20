import styled from 'styled-components';

export const FavoritesPage = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  article {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  h3 {
    color: #023031;
    margin-bottom: 20px;
  }

  section {
    align-items: center;
    box-shadow: 5px 5px 15px 5px rgb(190, 190, 190);
    border-radius: 10px;
    display: flex;
    height: 100px;
    justify-content: space-around;
    flex-direction: row;
    padding: 5px 10px;
    margin-bottom: 15px;
    width: 90%;

    div {
      align-items: center;
      box-shadow: none;
      margin-bottom: 0;
      padding: 0;
      width: 90%;

      article > img {
        width: 50px;
      }
    }

    img {
      border-radius: 10px;
      width: 80px;
    }
  }

  @media only screen and (min-width: 601px) {
    section {
      height: 450px;
      width: 30%;
    }
  }
`;
