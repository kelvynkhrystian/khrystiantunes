import React from 'react';

const Login = () => {
  return (
    <article>
      {/* <img src={ Logo } alt="LogoKhrystianTunes" /> */}
      <img
        src="https://khrystian-tunes-ouafcs5fv-kelvynkhrystian.vercel.app/"
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
        <button
          type="submit"
          // disabled={ button }
          // className={ styles.loginButton }
          // onClick={ this.loginButton }
        >
          Entrar
        </button>
        {/* { carregando && <Loading />}
          { redirecionar && <Redirect to="/search" />} */}
      </section>
    </article>
  );
};

export default Login;
