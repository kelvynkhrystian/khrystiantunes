import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

import Header from '../components/Header';
import Loading from '../components/Loading';
import { ProfilePage } from '../styles/pages/ProfileStyles';

const Profile = () => {
  // const { user, clearUser } = useContext(UserContext);
  const { user, updateUser } = useContext(UserContext);
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  // rever porque a função clear no context não funcionou
  const Clear = () => {
    updateUser({
      name: '',
      email: '',
      image: '',
      description: ',',
    });
  };

  return (
    <>
      <Header />
      <ProfilePage>
        {loading ? (
          <Loading />
        ) : (
          <section>
            <img
              src={
                user.image ||
                'https://cdn-icons-png.flaticon.com/512/74/74472.png'
              }
              alt="user image"
            />
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
            <h4>{user.description}</h4>
            <div>
              <Link to="/profile/edit">Editar</Link>
              <Link to="/" onClick={Clear}>
                Sair
              </Link>
            </div>
          </section>
        )}
      </ProfilePage>
    </>
  );
};

export default Profile;
