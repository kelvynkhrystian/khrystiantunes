import React, { useContext, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { UserContext } from '../context/UserContext';
import { ProfileEditPage } from '../styles/pages/ProfileEditStyles';

const ProfileEdit = () => {
  const { user, updateUser } = useContext(UserContext);
  const [loading, setloading] = useState(false);
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <ProfileEditPage data-testid="page-profile-edit">
          {/* className={styles.edit} */}
          <section>
            {/* className={styles.editBox} */}
            <div>
              {/* className={styles.editBoxName} */}
              <h3>Name:</h3>
              <input
                type="text"
                value={user ? user.name : ''}
                // onChange={this.handleInputChange}
              />
            </div>
            <div>
              {/* className={styles.editBoxEmail} */}
              <h3>Email:</h3>
              <input
                type="text"
                value={user ? user.email : ''}
                // onChange={this.handleInputChange}
              />
            </div>
            <div>
              {/* className={styles.editBoxDescricao} */}
              <h3>Descricão:</h3>
              <textarea
                data-testid="edit-input-description"
                name="description"
                value={user ? user.description : ''}
                // onChange={this.handleInputChange}
              />
            </div>
            <div>
              {/* className={styles.editBoxImagem} */}
              <h3>Imagem de perfil:</h3>
              <input
                type="text"
                data-testid="edit-input-image"
                name="image"
                value={user ? user.image : ''}
                // onChange={this.handleInputChange}
              />
            </div>
            <button
              type="submit"
              // onClick={this.UpdateInfo}
              // disabled={disable}
            >
              <h3>Salvar</h3>
            </button>
          </section>
        </ProfileEditPage>
      )}
    </>
  );
};

export default ProfileEdit;
