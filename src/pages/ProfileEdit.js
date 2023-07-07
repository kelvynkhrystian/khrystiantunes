import React from 'react';
import { Redirect } from 'react-router-dom';

import { getUser, updateUser } from '../services/userAPI';
import Loading from '../components/LoadingBig';
import Header from '../components/Header';

import styles from '../styles/ProfileEdit.module.css';

class ProfileEdit extends React.Component {
  state = {
    infoUser: null,
    loading: true,
    redirecionar: false,
    disable: true,
  }

  async componentDidMount() {
    const info = await getUser();
    // console.log(info);
    this.checkInfo(info);
    this.setState({
      infoUser: info,
      loading: false,
    });
  }

  checkInfo = ({ name, email, image, description }) => {
    // console.log(infoUser);
    const isString = (value) => typeof value === 'string';
    const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (isString(name) && isString(description) && isString(image) && isEmail(email)) {
      this.setState({ disable: false });
    } else {
      this.setState({ disable: true });
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      infoUser: {
        ...prevState.infoUser,
        [name]: value,
      },
    }), () => {
      const { infoUser } = this.state;
      this.checkInfo(infoUser);
    });
  };

  UpdateInfo = async () => {
    this.setState({ redirecionar: true });
    const { infoUser } = this.state;
    await updateUser(infoUser);
  }

  render() {
    const { infoUser, loading, redirecionar, disable } = this.state;
    // console.log(infoUser);
    return (
      <main>
        <Header />
        <article data-testid="page-profile-edit" className={ styles.edit }>
          { loading ? <Loading /> : (    
            <section className={ styles.editBox }>
              <div className={ styles.editBoxName }>
                <h3>Name:</h3>
                <input
                  type="text"
                  data-testid="edit-input-name"
                  name="name"
                  value={ infoUser ? infoUser.name : '' }
                  onChange={ this.handleInputChange }
                />
              </div>
              <div className={ styles.editBoxEmail }>
                <h3>Email:</h3>
                <input
                  type="text"
                  data-testid="edit-input-email"
                  name="email"
                  value={ infoUser ? infoUser.email : '' }
                  onChange={ this.handleInputChange }
                />
              </div>
              <div className={ styles.editBoxDescricao }>
                <h3>Descricão:</h3>
                <textarea
                  data-testid="edit-input-description"
                  name="description"
                  value={ infoUser ? infoUser.description : '' }
                  onChange={ this.handleInputChange }
                />
              </div>
              <div className={ styles.editBoxImagem }>
                <h3>Imagem de perfil:</h3>
                <input
                  type="text"
                  data-testid="edit-input-image"
                  name="image"
                  value={ infoUser ? infoUser.image : '' }
                  onChange={ this.handleInputChange }
                />
              </div>
              <button
                type="submit"
                data-testid="edit-button-save"
                onClick={ this.UpdateInfo }
                disabled={ disable }
              >
                <h3>Salvar</h3>
              </button>
            </section>  
          )}
        </article>
        { redirecionar && <Redirect to="/profile" />}
      </main>
    );
  }
}

export default ProfileEdit;
