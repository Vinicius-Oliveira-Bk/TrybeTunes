import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import { addSong, getFavoriteSongs } from '../../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  state = {
    inLoading: false,
    favorites: [],
  };

  async componentDidMount() {
    this.setState({
      inLoading: true,
    });
    const favoritesSongs = await getFavoriteSongs();
    this.setState({
      inLoading: false,
      favorites: [favoritesSongs],
    });
  }

  addFavorties = async (song) => {
    this.setState({
      inLoading: true,
    });
    await addSong(song);
    this.setState({
      inLoading: false,
    });
  };

  render() {
    const {
      trackName,
      previewUrl,
      trackNumber,
      trackId,
      element,
    } = this.props;
    const { inLoading, favorites } = this.state;
    console.log(favorites);
    return (
      <div>
        {
          inLoading && <Loading />
        }
        <h4>{ trackName }</h4>
        <div>{ trackNumber }</div>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>
        <label
          htmlFor="label"
        >
          Favorita
          <input
            data-testid={ `checkbox-music-${trackId}` }
            type="checkbox"
            name="inputFavorite"
            onChange={ () => this.addFavorties(element) }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string,
  previewUrl: PropTypes.string,
}.isRequired;
