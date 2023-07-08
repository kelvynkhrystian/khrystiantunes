import React from 'react';

import styles from '../styles/Loading.module.css';
import Load from '../images/loading.gif';

class Carregando extends React.Component {
  render() {
    return (
      <article className={ styles.loading }>
        <img src={ Load } alt="loading gif" className={ styles.img } />
      </article>
    );
  }
}

export default Carregando;
