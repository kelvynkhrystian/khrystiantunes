import React from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';

import styles from '../styles/Favorites.module.css';

class Favorites extends React.Component {
  state= {
    favoritesSong: [],
    loading: false,
    verified: true,
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const result = await getFavoriteSongs();
    this.setState({
      favoritesSong: result,
      loading: false,
    });
  }

  removeFavorite = (music) => {
    const { favoritesSong } = this.state;
    console.log(music);
    this.setState({
      favoritesSong: favoritesSong.filter((item) => item.trackId !== music.trackId),
    });
  }

  render() {
    const { favoritesSong, loading, verified } = this.state;
    // if (loading) return <Loading />;
    return (
      <>
        <Header />
        { loading ? <Loading /> : (
          <>
            <h3 className={ styles.h3 }>Músicas Favoritas:</h3>
            <article className={ styles.favoritesPage }>
              {favoritesSong.map((item) => (
                <section key={ item.trackId }>
                  <div className={ styles.imgBox }>
                    <img src={ item.artworkUrl100 } alt={ item.collectionName } />
                  </div>
                  <MusicCard
                    key={ item.trackId }
                    trackName={ item.trackName }
                    previewUrl={ item.previewUrl }
                    trackId={ item.trackId }
                    musics={ item }
                    id={ item.trackId }
                    name={ item.trackName }
                    checked={ verified }
                    removeFavorite={ this.removeFavorite }
                  />
                </section>
              ))}
            </article>
          </>
        )}
      </>
    );
  }
}

export default Favorites;
