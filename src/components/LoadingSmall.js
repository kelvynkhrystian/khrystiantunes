import React from 'react';

import styles from '../styles/LoadingSmall.module.css';
import Load from '../images/loading.gif';

class Carregando extends React.Component {
  render() {
    return (
      <section className={ styles.loading }>
        <img src={ Load } alt="loading gif" className={ styles.img } />
      </section>
    );
  }
}

export default Carregando;
