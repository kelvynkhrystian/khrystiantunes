import styled from 'styled-components';

// Carregamento

export const LoadingStyles = styled.article`
  align-items: flex-start;
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

// carregamento de tela completa

export const LoadingFullStyles = styled(LoadingStyles)`
  height: 100vh;
  z-index: 999;
`;
