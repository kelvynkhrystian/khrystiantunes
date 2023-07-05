import React from 'react';
import { Link } from 'react-router-dom';

import { getUser } from '../services/userAPI';
import Loading from '../components/Loading';
import Header from '../components/Header';

import styles from '../styles/Profile.module.css';

class Profile extends React.Component {
  state = {
    infoUser: null,
    loading: true,
  }

  async componentDidMount() {
    const info = await getUser();
    this.setState({
      infoUser: info,
      loading: false,
    });
  }

  profile = () => {
    const { infoUser } = this.state;
    const { name, image, email, description } = infoUser;
    return (
      <section className={ styles.profileBox }>
        <img
          data-testid="profile-image"
          src={ image || 'https://cdn-icons-png.flaticon.com/512/74/74472.png' }
          alt="imagem do perfil"
        />
        <p><strong>{name}</strong></p>
        <p>{email}</p>
        <p>{description}</p>
        <div>
          <Link to="/profile/edit" className={ styles.link }>Editar perfil</Link>
          <Link to="/" className={ styles.link }>Sair</Link>
        </div>
      </section>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <>
        <Header />
        <article className={ styles.profilePage }>
          {loading ? <Loading /> : this.profile()}
        </article>
      </>
    );
  }
}

export default Profile;
