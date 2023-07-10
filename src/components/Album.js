import React from 'react';
import PropTypes from 'prop-types';

import getMusic from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

import Loading from './LoadingBig';
import Header from './Header';
import MusicCard from './MusicCard';

import styles from '../styles/Album.module.css';

class Album extends React.Component {
  state = {
    musicList: [],
    loading: true,
    verified: false,
  };

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusic(id);
    this.setState({
      musicList: musics,
      loading: true,
    });
    await getFavoriteSongs();
    this.setState({
      loading: false,
    });
  }

  render() {
    const { musicList, loading, verified } = this.state;
    return (
      <>
        <Header />
        { loading ? <Loading /> : (
          <article className={ styles.pageAlbum }>
            { musicList.length > 0 && (
              <div className={ styles.pageAlbumLeft }>
                <img
                  src={ musicList[0].artworkUrl100 }
                  alt={ musicList[0].collectionName }
                />
                <div>
                  <h5 data-testid="artist-name">
                    { musicList[0].artistName }
                  </h5>
                  <p data-testid="album-name">
                    { musicList[0].collectionName }
                  </p>
                </div>
              </div>
            )}
            <section className={ styles.pageAlbumRigth }>
              {musicList && musicList.filter((item) => item.trackId)
                .map((music) => (
                  <MusicCard
                    key={ music.trackId }
                    trackName={ music.trackName }
                    previewUrl={ music.previewUrl }
                    trackId={ music.trackId }
                    musics={ music }
                    id={ music.trackId }
                    name={ music.trackName }
                    checked={ verified }
                  />
                ))
              }
            </section>
          </article>
        )}
      </>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
