import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import Loading from './Loading';
import { HeaderStyles } from '../styles/components/HeaderStyles';

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <HeaderStyles>
      <section>
        <img
          src="https://github.com/kelvynkhrystian/khrystiantunes/blob/main/src/images/logoWhite.png?raw=true"
          alt="LogoKhrystianTunes"
        />
        <div>
          <img
            src="https://github.com/kelvynkhrystian/khrystiantunes/blob/main/src/images/user.png?raw=true"
            alt="LogoUser"
          />
          <p>Olá, {!user.name ? <Loading /> : user.name}</p>
        </div>
      </section>
      <nav>
        <Link to="/search">
          <h3>Search</h3>
        </Link>
        <Link to="/favorites">
          <h3>Favorites</h3>
        </Link>
        <Link to="/profile">
          <h3>Profile</h3>
        </Link>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
