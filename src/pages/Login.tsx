import React, { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { LoginButton, LoginPage } from '../styles/pages/LoginStyles';

const Login = () => {
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [button, setbutton] = useState(true);

  const SaveUsername = () => {
    updateUser({
      name: name,
    });
  };

  const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // console.log(value);
    value.length <= 2 ? setbutton(true) : setbutton(false);
    setname(value);
  };

  const LoginApp = () => {
    SaveUsername();
    navigate('/search');
  };

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
          onChange={InputChange}
        />
        <LoginButton
          type="submit"
          disabled={button}
          // className={ styles.loginButton }
          onClick={LoginApp}
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
