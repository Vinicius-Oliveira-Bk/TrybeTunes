import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class AlbunsArtist extends Component {
  render() {
    const { artist, collection, artworkUrl, collectionId, id } = this.props;
    return (
      <>
        <img src={ artworkUrl } alt={ collection } />
        <h3>{ collection }</h3>
        <h4>{ artist }</h4>
        <Link
          data-testid={ `link-to-album-${collectionId}` }
          to={ `/album/${id}` }
        >
          Página do Album
        </Link>
      </>
    );
  }
}

AlbunsArtist.propTypes = {
  artist: PropTypes.string,
  collection: PropTypes.string,
  artworkUrl: PropTypes.string,
  id: PropTypes.number,
  collectionId: PropTypes.number,
}.isRequired;
