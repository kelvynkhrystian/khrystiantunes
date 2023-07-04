import React from 'react';
import { Redirect } from 'react-router-dom';

import { createUser } from '../services/userAPI';
import Loading from '../components/LoadingBig';

import styles from '../styles/Login.module.css';
import Logo from '../images/logoGreen.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      button: true,
      carregando: false,
      redirecionar: false };
  }

  InputChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const length = 3;
      const { value } = this.state;
      if (value.length >= length) {
        this.setState({
          button: false,
        });
      } else {
        this.setState({
          button: true,
        });
      }
    });
  }

  loginButton= async () => {
    const { value } = this.state;
    this.setState({ carregando: true });
    await createUser({ name: value });
    this.setState({ carregando: false,
      redirecionar: true });
  }

  render() {
    const { value, button, carregando, redirecionar } = this.state;
    return (
      <article data-testid="page-login" className={ styles.loginPage }>
        <img src={ Logo } alt="LogoKhrystianTunes" className={ styles.img } />
        <section className={ styles.inputBox }>
          <input
            type="text"
            placeholder="Digite o nome de novo usuário"
            data-testid="login-name-input"
            className={ styles.input }
            name="value"
            value={ value }
            onChange={ this.InputChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ button }
            className={ styles.loginButton }
            onClick={ this.loginButton }
          >
            Entrar
          </button>
          { carregando && <Loading />}
          { redirecionar && <Redirect to="/search" />}
        </section>
      </article>
    );
  }
}

export default Login;
