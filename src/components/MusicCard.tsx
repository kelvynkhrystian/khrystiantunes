import React, { useState } from 'react';
import Loading from '../components/Loading';
import { CardMusic } from '../styles/components/MusicCardStyles';
import { SearchMusic } from '../services/searchMusicsAPI';

const MusicCard = (props: SearchMusic) => {
  const { trackName, previewUrl } = props;
  console.log(props);

  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <>
      <CardMusic>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div>
              <h4>{trackName}</h4>
              <label htmlFor={trackName}>
                <i className="fas fa-heart"></i>
                <input
                  type="checkbox"
                  id={trackName}
                  name={trackName}
                  // onChange={this.handleCheckMusic}
                  // checked={verified}
                  // className={styles.input}
                />
              </label>
            </div>

            <audio src={previewUrl} controls>
              <track kind="captions" />O seu navegador não suporta o elemento
              <code>audio</code>.
            </audio>
          </>
        )}
      </CardMusic>
    </>
  );
};

export default MusicCard;
