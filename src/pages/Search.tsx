import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import {
  SearchPage,
  SearchInput,
  SearchList,
  SearchButton,
} from '../styles/pages/SeachStyles';

const Search = () => {
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
            // onChange={this.InputChangeSearch}
            placeholder="Busque um artista ou banda"
          />
          <SearchButton
            type="button"
            className={'searchButton'}
            data-testid="search-artist-button"
            // disabled={'buttonSearch'}
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
