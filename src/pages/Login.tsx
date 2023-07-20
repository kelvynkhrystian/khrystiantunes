import React, { ChangeEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { LoginButton, LoginPage } from '../styles/pages/LoginStyles';
import LoadingFull from '../components/LoadingFull';

const Login = () => {
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [name, setname] = useState('');
  const [button, setbutton] = useState(true);
  const [loading, setloading] = useState(false);

  const SimlateLoading = () => {
    setTimeout(() => {
      navigate('/search');
      setloading(false);
    }, 2000);
  };

  const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    value.length <= 2 || value.length > 11 ? setbutton(true) : setbutton(false);
    setname(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !button) {
      LoginApp();
    }
  };

  const LoginApp = () => {
    setloading(true);
    updateUser({ name });
    SimlateLoading();
  };

  return (
    <LoginPage>
      {loading ? (
        <LoadingFull />
      ) : (
        <>
          <img
            src="https://khrystian-tunes-ouafcs5fv-kelvynkhrystian.vercel.app/static/media/logoGreen.786ce55f.png"
            alt="Logo"
          />
          <section>
            <input
              type="text"
              placeholder="Digite o nome de novo usuário"
              onChange={InputChange}
              onKeyDown={handleKeyDown}
            />
            <LoginButton type="submit" disabled={button} onClick={LoginApp}>
              Entrar
            </LoginButton>
          </section>
        </>
      )}
    </LoginPage>
  );
};

export default Login;
