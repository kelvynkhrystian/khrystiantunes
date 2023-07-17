import React, { ChangeEvent, useState } from 'react';
import searchAlbumsAPI, { SearchResult } from '../services/searchAlbumsAPI';

import Header from '../components/Header';
import Loading from '../components/Loading';
import {
  SearchPage,
  SearchInput,
  SearchList,
  SearchButton,
  AlbumCard,
} from '../styles/pages/SeachStyles';
import { Link } from 'react-router-dom';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(false);
  const [button, setbutton] = useState(true);
  const [list, setList] = useState(false);
  const [api, setApi] = useState<SearchResult[]>([]);

  const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // status button
    value.length < 2 || value.length > 15 ? setbutton(true) : setbutton(false);
    // salvando o valor do input atual
    setSearchText(value);
  };

  const SearchApi = async (search: string) => {
    try {
      const listApi = await searchAlbumsAPI(search);
      setApi(listApi);
    } catch (error) {
      console.error('Erro na busca de álbuns:', error);
      setApi([]);
    }
  };

  const SearchClick = async () => {
    setLoading(true);
    setList(true);
    await SearchApi(searchText);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <SearchPage>
        <SearchInput>
          <input
            type="text"
            onChange={InputChange}
            placeholder="Busque um artista ou banda"
          />
          <SearchButton type="button" disabled={button} onClick={SearchClick}>
            Pesquisar
          </SearchButton>
        </SearchInput>
        <SearchList className={'renderList'}>
          {list ? (
            <section className={'renderizou'}>
              <p>
                Resultado de álbuns de: <strong>{` ${searchText}`}</strong>
              </p>

              <article className={'renderizouLista'}>
                {api.length > 0 ? (
                  api.map((album) => (
                    <AlbumCard key={album.collectionId}>
                      <img src={album.artworkUrl100} />
                      <p>{album.collectionName}</p>
                      <h4>{album.artistName}</h4>
                      <Link
                        key={album.collectionId}
                        to={`/album/${album.collectionId}`}
                      >
                        Album
                      </Link>
                    </AlbumCard>
                  ))
                ) : (
                  <p>Nenhum álbum foi encontrado</p>
                )}
              </article>
            </section>
          ) : null}
          {loading && <Loading />}
        </SearchList>
      </SearchPage>
    </>
  );
};

export default Search;
