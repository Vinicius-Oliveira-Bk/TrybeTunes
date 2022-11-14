import React, { Component } from 'react';
import Header from './Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbunsArtist from './Components/AlbunsArtist';

export default class Search extends Component {
  state = {
    hideButton: true,
    submitButton: '',
    resultArtist: false,
    albuns: [],
  };

  isButtonDisabled = () => {
    const { submitButton } = this.state;
    const number = 2;
    const validate = submitButton.length >= number;

    return !(validate);
  };

  searchArtisti = async (artist) => {
    this.setState({
      hideButton: false,
    });
    const result = await searchAlbumsAPI(artist);
    console.log(result);
    this.setState({
      resultArtist: true,
      hideButton: true,
      albuns: [...result],
    });
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { submitButton, resultArtist, hideButton, albuns } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        {
          hideButton
          && (
            <form>
              <input
                type="text"
                data-testid="search-artist-input"
                onChange={ this.onInputChange }
                name="submitButton"
              />
              <button
                type="button"
                data-testid="search-artist-button"
                onClick={ () => (this.searchArtisti(submitButton)) }
                disabled={ this.isButtonDisabled() }
              >
                Pesquisar
              </button>
            </form>
          )
        }
        <div>
          {
            resultArtist && <p>{`Resultado de álbuns de: ${submitButton}`}</p>
          }
          {
            albuns.length !== 0
              ? albuns.map((album) => (
                <AlbunsArtist
                  key={ album.artistId }
                  artworkUrl={ album.artworkUrl100 }
                  artist={ album.artistName }
                  collection={ album.collectionName }
                  collectionId={ album.collectionId }
                  id={ album.collectionId }
                />
              ))
              : <p>Nenhum álbum foi encontrado</p>
          }
        </div>
      </div>
    );
  }
}
