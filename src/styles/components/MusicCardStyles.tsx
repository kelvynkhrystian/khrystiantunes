import styled from 'styled-components';

export const CardMusic = styled.div`
  align-items: center;
  box-shadow: 5px 5px 15px 5px rgb(190, 190, 190);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: bold;
  height: 100px;
  justify-content: space-around;
  padding: 10px 20px;
  margin-bottom: 15px;
  width: 90%;

  div {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 10px;

    input {
      display: none;
    }

    label {
      cursor: pointer;
      font-size: 20px;
    }

    .checkFalse {
      color: #808080;
    }

    .checkTrue {
      color: #ff0000;
    }
  }

  audio {
    height: 40px;
    width: 100%;
  }

  @media only screen and (min-width: 601px) {
    section {
      /* justify-content: center; */
    }
  }
`;
