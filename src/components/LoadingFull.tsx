import React from 'react';
import { LoadingFullStyles } from '../styles/components/LoadingStyles';

const LoadingFull = () => {
  return (
    <LoadingFullStyles>
      <img
        src="https://github.com/kelvynkhrystian/khrystiantunes/blob/main/src/images/loading.gif?raw=true"
        alt="loading gif"
      />
    </LoadingFullStyles>
  );
};

export default LoadingFull;
