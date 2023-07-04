import React from 'react';
import PropTypes from 'prop-types';

import getMusic from '../services/musicsAPI';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

import Loading from './Loading';
import Header from './Header';
import MusicCard from './MusicCard';

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
        { loading && <Loading /> }
        <Header />
        <div className="section-album">
          {musicList.length > 0 && (
            <div className="page-album">
              <img
                src={ musicList[0].artworkUrl100 }
                alt={ musicList[0].collectionName }
              />
              <div className="paragrafo-album">
                <p data-testid="artist-name">
                  { musicList[0].artistName }
                </p>
                <p data-testid="album-name">
                  { musicList[0].collectionName }
                </p>
              </div>
            </div>
          )}
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
              />))}
        </div>
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
