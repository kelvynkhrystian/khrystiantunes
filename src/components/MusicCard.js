import React from 'react';
import PropTypes from 'prop-types';

import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

import styles from '../styles/MusicCard.module.css';

class MusicCard extends React.Component {
  state = {
    verified: false,
    loading: false,
  }

  async componentDidMount() {
    const favoritesSong = await getFavoriteSongs();
    this.setState({ verified: this.verified(favoritesSong) });
  }

  handleCheckMusic = async ({ target: { checked } }) => {
    const { musics, removeFavorite } = this.props;
    this.setState({ verified: checked, loading: true });
    if (checked) {
      await addSong(musics);
      this.setState({ loading: false });
    } else {
      await removeSong(musics);
      if (removeFavorite) {
        removeFavorite(musics);
      }
      this.setState({ loading: false });
    }
  }

  verified = (list) => {
    const { trackId } = this.props;
    return list.some((lista) => lista.trackId === trackId);
  }

  render() {
    const { loading, verified } = this.state;
    const { trackName, previewUrl, trackId } = this.props;
    return (
      <section className={ styles.sectionleft }>
        { loading ? <Loading /> : (
          <>
            <div className={ styles.divleft }>
              <p>{ trackName }</p>
              <label htmlFor={ trackName } className={ verified? styles.label2 : styles.label }>
                <input
                  type="checkbox"
                  id={ trackName }
                  name={ trackName }
                  data-testid={ `checkbox-music-${trackId}` }
                  onChange={ this.handleCheckMusic }
                  checked={ verified }
                  className={ styles.input }
                />
                <i className="fas fa-heart"></i>
              </label>
            </div>
            <audio data-testid="audio-component" src={ previewUrl } controls className={ styles.audio }>
              <track kind="captions" />
              Seu navegador não suporta o elemento <code>audio</code>.
            </audio>
          </>
        )}
      </section>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  musics: PropTypes.objectOf(PropTypes.any).isRequired,
  removeFavorite: PropTypes.func.isRequired,
};

export default MusicCard;
