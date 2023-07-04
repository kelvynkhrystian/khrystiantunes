import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../services/userAPI';
import Loading from './Loading';

import styles from '../styles/Header.module.css';
import Logo from '../images/logoWhite.png';
import User from '../images/user.png';

class Header extends React.Component {
  constructor() {
    super();

    this.state = {
      userName: '',
    };
  }

  async componentDidMount() {
    const userName = await getUser();
    this.setState({ userName });
  }

  render() {
    const { userName } = this.state;
    return (
      <header data-testid="header-component" className={ styles.header }>
        <div className={ styles.headerTop }>
          <img src={ Logo } alt="LogoKhrystianTunes" />
          <div className={ styles.headerUser }>
            <img src={ User } alt="LogoUser" className={ styles.imgUser } />
            <p className={ styles.nameUser }>
              Olá, 
              <span data-testid="header-user-name"> 
                {/* ajeitar css do Loading  */}
                { !userName.name && <Loading /> }
                {/* css bold? ou deixa assim igual o da trybe */}
                { userName.name }
              </span>
            </p>
          </div>
        </div>
        <nav>
          <Link
            to="/search"
            className={ styles.link }
            data-testid="link-to-search"
          >
            <h2>Search</h2>
          </Link>
          <Link
            to="/favorites"
            className={ styles.link }
            data-testid="link-to-favorites"
          >
            <h2>Favorites</h2>
          </Link>
          <Link to="/profile" className={ styles.link } data-testid="link-to-profile">
            <h2>Profile</h2>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
