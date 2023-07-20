import styled from 'styled-components';

export const AlbumPage = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  article {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  section {
    align-items: center;
    border-radius: 10px;
    display: flex;
    height: 300px;
    justify-content: space-around;
    flex-direction: column;
    margin-bottom: 15px;
    width: 90%;

    div {
      text-align: center;
    }
    h4 {
      margin-bottom: 10px;
    }

    img {
      border-radius: 10px;
      margin-bottom: 10px;
      width: 200px;
    }
  }

  @media only screen and (min-width: 601px) {
    align-items: flex-start;
    justify-content: space-around;
    flex-direction: row;
    width: 95%;

    article {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 65%;
    }

    section {
      justify-content: flex-start;
      height: 450px;
      width: 30%;

      img {
        margin-bottom: 10px;
        width: 100%;
      }
    }

    div {
      width: 100%;
    }
  }
`;
