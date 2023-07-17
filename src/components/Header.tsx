import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import Loading from './Loading';
import { HeaderStyles } from '../styles/components/HeaderStyles';

const Header = () => {
  const { user } = useContext(UserContext);

  // console.log('user', user);
  // console.log('Dados do usuário:', user.name);

  return (
    <HeaderStyles data-testid="header-component" className={'styles.header'}>
      <section className={'styles.headerTop'}>
        <img
          src="https://github.com/kelvynkhrystian/khrystiantunes/blob/main/src/images/logoWhite.png?raw=true"
          alt="LogoKhrystianTunes"
        />
        <div className={'styles.headerUser'}>
          <img
            src="https://github.com/kelvynkhrystian/khrystiantunes/blob/main/src/images/user.png?raw=true"
            alt="LogoUser"
            className={'styles.imgUser'}
          />
          <p className={'styles.nameUser'}>
            Olá, {!user.name ? <Loading /> : user.name}
          </p>
        </div>
      </section>
      <nav>
        <Link
          to="/search"
          className={'styles.link'}
          data-testid="link-to-search"
        >
          <h3>Search</h3>
        </Link>
        <Link
          to="/favorites"
          className={'styles.link'}
          data-testid="link-to-favorites"
        >
          <h3>Favorites</h3>
        </Link>
        <Link
          to="/profile"
          className={'styles.link'}
          data-testid="link-to-profile"
        >
          <h3>Profile</h3>
        </Link>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
