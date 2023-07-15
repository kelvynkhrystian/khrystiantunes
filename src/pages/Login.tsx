import React from 'react';
import { LoginButton, LoginPage } from '../styles/PageLoginStyles';

const Login = () => {
  return (
    <LoginPage>
      <img
        src="https://khrystian-tunes-ouafcs5fv-kelvynkhrystian.vercel.app/static/media/logoGreen.786ce55f.png"
        alt="Logo"
      />
      <section>
        <input
          type="text"
          placeholder="Digite o nome de novo usuário"
          // className={ styles.input }
          // name="value"
          // value={ value }
          // onChange={ this.InputChange }
        />
        <LoginButton
          type="submit"
          // disabled={ button }
          // className={ styles.loginButton }
          // onClick={ this.loginButton }
        >
          Entrar
        </LoginButton>
        {/* { carregando && <Loading />}
          { redirecionar && <Redirect to="/search" />} */}
      </section>
    </LoginPage>
  );
};

export default Login;
