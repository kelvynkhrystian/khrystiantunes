import React, { useState, useEffect, ChangeEvent, useContext } from 'react';
import Loading from '../components/Loading';
import { CardMusic } from '../styles/components/MusicCardStyles';
import { SearchMusic } from '../services/searchMusicsAPI';
import { FavoritesContext } from '../context/FavoritesContext';

const MusicCard = (props: SearchMusic) => {
  const { trackName, previewUrl, musics } = props;
  const { getFavorites, addFavorites, remFavorites } =
    useContext(FavoritesContext);
  const [loading, setLoading] = useState(true);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleCheckMusic = (event: ChangeEvent<HTMLInputElement>) => {
    const check = event.target.checked;
    console.log('favoritos');

    //

    if (check) {
      addFavorites(musics ? musics : {});
      setChecked(true);
      console.log(getFavorites());
    } else {
      remFavorites(musics ? musics : {});
      setChecked(false);
      console.log(getFavorites());
    }
  };

  return (
    <>
      <CardMusic>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div>
              <h4>{trackName}</h4>
              <label
                htmlFor={trackName}
                className={checked ? 'checkTrue' : 'checkFalse'}
              >
                <i className="fas fa-heart"></i>
                <input
                  type="checkbox"
                  id={trackName}
                  name={trackName}
                  onChange={handleCheckMusic}
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
