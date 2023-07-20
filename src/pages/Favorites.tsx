import React, { useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { FavoritesPage } from '../styles/pages/FavoritesStyles';
import { FavoritesContext } from '../context/FavoritesContext';
import MusicCard from '../components/MusicCard';
import { SearchMusic } from '../services/searchMusicsAPI';

const Favorites = () => {
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState<SearchMusic[]>([]);
  const { getFavorites } = useContext(FavoritesContext);

  useEffect(() => {
    getFavoritesMusics();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  const getFavoritesMusics = () => {
    const fav = getFavorites();
    setFavorites(fav ? fav : []);
  };

  return (
    <>
      <Header />
      <FavoritesPage>
        {loading ? (
          <Loading />
        ) : (
          <>
            <h3>Músicas Favoritas:</h3>
            <article>
              {favorites.map((item: SearchMusic) => (
                <section key={item.trackId}>
                  <img src={item.artworkUrl100} alt={item.collectionName} />
                  <MusicCard
                    key={item.trackId}
                    trackName={item.trackName}
                    previewUrl={item.previewUrl}
                    trackId={item.trackId}
                    musics={item}
                    id={item.trackId}
                    name={item.trackName}
                    checked={item.checked}
                  />
                </section>
              ))}
            </article>
          </>
        )}
      </FavoritesPage>
    </>
  );
};

export default Favorites;
