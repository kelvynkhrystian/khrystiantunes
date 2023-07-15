import React from 'react';
import { LoadingStyles } from '../styles/components/LoadingStyles';

const Loading = () => {
  return (
    <LoadingStyles>
      <img
        src="https://github.com/kelvynkhrystian/khrystiantunes/blob/main/src/images/loading.gif?raw=true"
        alt="loading gif"
      />
    </LoadingStyles>
  );
};

export default Loading;
