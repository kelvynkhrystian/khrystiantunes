import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AlbumPage } from '../styles/pages/AlbumStyles';
import getMusicsAPI, { SearchMusic } from '../services/searchMusicsAPI';
import MusicCard from '../components/MusicCard';

const Album = () => {
  const [loading, setloading] = useState<boolean>(true);
  const [album, setAlbum] = useState<SearchMusic>({});
  const [musics, setMusics] = useState<SearchMusic[]>([]);
  const { id } = useParams<string>();

  useEffect(() => {
    getAlbum();
    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, []);

  const getAlbum = async () => {
    const currentAlbum = await getMusicsAPI(id);
    setAlbum(currentAlbum[0]);
    setMusics(currentAlbum.slice(1));
  };

  return (
    <>
      <Header />
      <AlbumPage>
        {loading ? (
          <Loading />
        ) : (
          <>
            <section>
              <img src={album.artworkUrl100} alt={album.collectionName} />
              <div>
                <h4>{album.artistName}</h4>
                <p>{album.collectionName}</p>
              </div>
            </section>

            <article>
              {musics
                .filter((item: SearchMusic) => item.trackId)
                .map((music: SearchMusic) => (
                  <MusicCard
                    key={music.trackId}
                    trackName={music.trackName}
                    previewUrl={music.previewUrl}
                    trackId={music.trackId}
                    musics={music}
                    id={music.trackId}
                    name={music.trackName}
                  />
                ))}
            </article>
          </>
        )}
      </AlbumPage>
    </>
  );
};

export default Album;
