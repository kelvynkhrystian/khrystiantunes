import styled from 'styled-components';

// Carregamento

export const LoadingStyles = styled.article`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  img {
    width: 50px;
  }

  @media only screen and (min-width: 601px) {
    img {
      width: 50px;
    }
  }
`;

export const LoadingFullStyles = styled.article`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 5%;
  z-index: 9999;

  img {
    width: 50px;
  }

  @media only screen and (min-width: 601px) {
    img {
      width: 50px;
    }
  }
`;
