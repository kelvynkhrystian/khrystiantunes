import React from 'react';

import styles from '../styles/NotFound.module.css';
import Logo from '../images/iconHeadfone.png';

class NotFound extends React.Component {
  render() {
    return (
      <article className={ styles.notFoundPage }>
        <section className={ styles.notFoundBox }>
          <img src={ Logo } alt="LogoFone"/>
          <div>
            <h1>Ops!</h1>
            <p>A página que você está </p>
            <p>procurando não foi encontrada.</p>
          </div>
        </section>
      </article>
    );
  }
}

export default NotFound;
