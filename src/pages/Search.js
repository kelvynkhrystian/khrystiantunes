import React from 'react';
import { Link } from 'react-router-dom';

import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from '../components/Loading';
import Header from '../components/Header';

import styles from '../styles/Search.module.css';

class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      listSearch: false,
      buttonSearch: true,
      valueSearch: '',
      api: [],
      pesquisou: '',
      carregando: false,
    };
  }

  InputChangeSearch = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const { valueSearch } = this.state;
      if (valueSearch.length >= 2) {
        this.setState({
          buttonSearch: false,
        });
      }
    });
  }

  // Loading = () => {
  //   this.setState({
  //     carregando: true,
  //   });
  // }

  Pesquisar = async () => {
    // console.log('chamou a fun');
    const { valueSearch } = this.state;
    // this.Loading();
    this.setState({
      carregando: true,
    });
    this.setState({
      pesquisou: valueSearch,
      valueSearch: '',
      api: await searchAlbumsAPI(valueSearch),
      listSearch: true,
      carregando: false,
    });
  }

  render() {
    const { buttonSearch, valueSearch, api, listSearch,
      pesquisou, carregando } = this.state;
    // listSearch
    // const api = searchAlbumsAPI;
    return (
      <>
        <Header />
        <div data-testid="page-search" className={ styles.search }>
          <div className={ styles.searchUp }>
            <input
              type="text"
              className={ styles.searchInput }
              data-testid="search-artist-input"
              name="valueSearch"
              value={ valueSearch }
              onChange={ this.InputChangeSearch }
              placeholder="Digite o nome de um artista ou banda"
            />
            <button
              type="button"
              className={ styles.searchButton }
              data-testid="search-artist-button"
              disabled={ buttonSearch }
              onClick={ this.Pesquisar }
            >
              Pesquisar
            </button>
          </div>
          <div className={ styles.renderList }>
            { carregando && <Loading /> }
            { (listSearch) ? (
              <section className={ styles.renderizou }>
                <div>
                  <p>{`Resultado de álbuns de: ${pesquisou}`}</p>
                </div>
                <div className={ styles.renderizouLista }>
                  {api.length > 0 ? (api.map((album) => (
                    <div className={ styles.albumCard } key={ album.collectionId }>
                      <img
                        src={ album.artworkUrl100 }
                        alt={ album.artistId }
                        className={ styles.imgAlbum }
                      />
                      <div
                        className={ styles.albumCardName }
                      >
                        { album.collectionName }
                      </div>
                      <h4>{ album.artistName }</h4>
                      <Link
                        key={ album.collectionId }
                        to={ `/album/${album.collectionId}` }
                        data-testid={ `link-to-album-${album.collectionId}` }
                        className={ styles.albumCardButton }
                      >
                        Album
                      </Link>
                    </div>
                  ))) : <p>Nenhum álbum foi encontrado</p> }
                </div>
              </section>
            ) : null }
          </div>
        </div>
      </>
    );
  }
}

export default Search;
