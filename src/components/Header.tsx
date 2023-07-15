import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { HeaderStyles } from '../styles/components/HeaderStyles';

const Header = () => {
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
            Olá,
            <span data-testid="header-user-name">
              {/* {!userName.name && <Loading />}
              {userName.name} */}
              <Loading />
            </span>
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
