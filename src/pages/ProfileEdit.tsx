import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext, User, emptyUser } from '../context/UserContext';

import {
  ProfileEditButton,
  ProfileEditPage,
} from '../styles/pages/ProfileEditStyles';
import Loading from '../components/Loading';
import Header from '../components/Header';

const ProfileEdit = () => {
  const { user, updateUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState<User>(emptyUser);
  const [loading, setloading] = useState(true);
  const [button, setButton] = useState(true);
  const navigate = useNavigate();

  setTimeout(() => {
    setloading(false);
  }, 1000);

  // fazer uma cópia do user para colocar nos inputs e ter a possibilidade de escrever no mesmo
  useEffect(() => {
    setNewUser(user);
  }, []);

  // fazer a verificação dos dados para liberar o botão
  useEffect(() => {
    verifyButton(newUser);
  }, [newUser]);

  const SimulateLoading = () => {
    setTimeout(() => {
      navigate('/profile');
      setloading(false);
    }, 1000);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = event.target.value;
    const infoUser = event.target.name;
    verifyData(infoUser, value);
  };

  const verifyData = (infoUser: string, value: string) => {
    switch (infoUser) {
      case 'inputName':
        const userName = { ...newUser, name: value };
        setNewUser(userName);
        break;
      case 'inputEmail':
        const userEmail = { ...newUser, email: value };
        setNewUser(userEmail);
        break;
      case 'description':
        const userDescription = { ...newUser, description: value };
        setNewUser(userDescription);
        break;
      case 'inputImage':
        const userImage = { ...newUser, image: value };
        setNewUser(userImage);
        break;
      default:
        break;
    }
  };

  const verifyButton = (data: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      data.name.length > 2 &&
      data.description.length > 1 &&
      data.image.length > 1 &&
      emailRegex.test(data.email)
    ) {
      setButton(false);
    } else {
      setButton(true);
    }

    console.log(button);
    console.log(data);
  };

  const SaveEditUser = () => {
    setloading(true);
    updateUser(newUser);
    SimulateLoading();
  };

  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <ProfileEditPage data-testid="page-profile-edit">
          <section>
            <div>
              <h3>Name:</h3>
              <input
                type="text"
                name="inputName"
                value={newUser ? newUser.name : ''}
                onChange={handleInputChange}
                placeholder="Digite seu nome"
              />
            </div>
            <div>
              <h3>Email:</h3>
              <input
                type="text"
                name="inputEmail"
                placeholder="Digite um email válido"
                value={newUser ? newUser.email : ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <h3>Descricão:</h3>
              <textarea
                name="description"
                placeholder="Diga algo sobre você"
                value={newUser ? newUser.description : ''}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <h3>Imagem:</h3>
              <input
                type="text"
                name="inputImage"
                placeholder="Cole o link da imagem"
                value={newUser ? newUser.image : ''}
                onChange={handleInputChange}
              />
            </div>
            <ProfileEditButton
              type="submit"
              onClick={SaveEditUser}
              disabled={button}
            >
              <h3>Salvar</h3>
            </ProfileEditButton>
          </section>
        </ProfileEditPage>
      )}
    </>
  );
};

export default ProfileEdit;
