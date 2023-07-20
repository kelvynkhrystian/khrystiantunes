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
  const [checkedHearth, setCheckedHearth] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 500);
  // }, [getFavorites]);

  const handleCheckMusic = (event: ChangeEvent<HTMLInputElement>) => {
    const check = event.target.checked;

    if (check) {
      addFavorites(musics ? musics : {});
      setCheckedHearth(true);
    } else {
      remFavorites(musics ? musics : {});
      setCheckedHearth(false);
    }

    console.log(getFavorites());
  };

  return (
    <>
      <CardMusic>
        <>
          {loading && <Loading />}
          {!loading && (
            <>
              <div>
                <h4>{trackName}</h4>
                <label
                  htmlFor={trackName}
                  className={checkedHearth ? 'checkTrue' : 'checkFalse'}
                >
                  <i className="fas fa-heart"></i>
                  <input
                    type="checkbox"
                    id={trackName}
                    name={trackName}
                    onChange={handleCheckMusic}
                    // checked={true}
                  />
                </label>
              </div>

              <audio src={previewUrl} controls>
                <track kind="captions" />O seu navegador não suporta o elemento
                <code>audio</code>.
              </audio>
            </>
          )}
        </>
      </CardMusic>
    </>
  );
};

export default MusicCard;
