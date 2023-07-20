import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { AlbumPage } from '../styles/pages/AlbumStyles';
import getMusicsAPI, { SearchMusic } from '../services/searchMusicsAPI';
import MusicCard from '../components/MusicCard';

const Album = () => {
  const [loading, setloading] = useState(true);
  const [album, setAlbum] = useState<SearchMusic>({});
  const [musics, setMusics] = useState<SearchMusic[]>([]);
  const { id } = useParams<string>();

  const getAlbum = async () => {
    const currentAlbum = await getMusicsAPI(id);
    setAlbum(currentAlbum[0]);
    setMusics(currentAlbum.slice(1));
  };

  useEffect(() => {
    getAlbum();
    // console.log(musics);
  }, []);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <>
      <Header />
      <AlbumPage className="section-album">
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
                .filter((item: SearchMusic) => item.trackId) // Adicionada tipagem "any" para o parâmetro "item"
                .map(
                  (
                    music: SearchMusic // Adicionada tipagem "any" para o parâmetro "music"
                  ) => (
                    <MusicCard
                      // key={musics.trackId}
                      trackName={music.trackName}
                      previewUrl={music.previewUrl}
                      trackId={music.trackId}
                      // musics={music}
                      // id={music.trackId}
                      // name={music.trackName}
                      // checked={verified}
                    />
                  )
                )}
            </article>
          </>
        )}
      </AlbumPage>
    </>
  );
};

export default Album;
