import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../services/userAPI';
import Loading from './LoadingSmall';

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
            <h3>Search</h3>
          </Link>
          <Link
            to="/favorites"
            className={ styles.link }
            data-testid="link-to-favorites"
          >
            <h3>Favorites</h3>
          </Link>
          <Link to="/profile" className={ styles.link } data-testid="link-to-profile">
            <h3>Profile</h3>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
