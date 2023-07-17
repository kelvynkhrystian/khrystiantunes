import React, { ChangeEvent, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import {
  SearchPage,
  SearchInput,
  SearchList,
  SearchButton,
} from '../styles/pages/SeachStyles';

const Search = () => {
  const [search, setSearch] = useState('');
  const [button, setbutton] = useState(true);

  const InputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    console.log(value);
    value.length <= 2 ? setbutton(true) : setbutton(false);
    setSearch(value);
  };

  return (
    <>
      <Header />
      <SearchPage data-testid="page-search" className={'search'}>
        <SearchInput className={'searchUp'}>
          <input
            type="text"
            className={'searchInput'}
            data-testid="search-artist-input"
            name="valueSearch"
            // value={'valueSearch'}
            onChange={InputChange}
            placeholder="Busque um artista ou banda"
          />
          <SearchButton
            type="button"
            disabled={button}
            // onClick={this.Pesquisar}
          >
            Pesquisar
          </SearchButton>
        </SearchInput>
        <SearchList className={'renderList'}>
          {'listSearch' ? (
            <section className={'renderizou'}>
              <div>
                <p>{`Resultado de álbuns de: ${'pesquisou'}`}</p>
              </div>
              {/* <div className={'renderizouLista'}>
                {api.length > 0 ? (
                  api.map((album) => (
                    <div className={albumCard} key={album.collectionId}>
                      <img
                        src={album.artworkUrl100}
                        alt={album.artistId}
                        className={imgAlbum}
                      />
                      <p className={albumCardName}>{album.collectionName}</p>
                      <h4>{album.artistName}</h4>
                      <Link
                        key={album.collectionId}
                        to={`/album/${album.collectionId}`}
                        data-testid={`link-to-album-${album.collectionId}`}
                        className={albumCardButton}
                      >
                        Album
                      </Link>
                    </div>
                  ))
                ) : (
                  <p>Nenhum álbum foi encontrado</p>
                )}
              </div> */}
            </section>
          ) : null}
          {'carregando' && <Loading />}
        </SearchList>
      </SearchPage>
    </>
  );
};

export default Search;
