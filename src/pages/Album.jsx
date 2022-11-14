import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import getMusics from '../services/musicsAPI';
import MusicCard from './Components/MusicCard';

export default class Album extends Component {
  state = {
    requestMusics: [],
    requestAlbum: [],
  };

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    const { match: { params: { id } } } = this.props;
    const request = await getMusics(id);
    this.description(request);
    const requestReduce = request.slice(1);
    this.setState({
      requestMusics: requestReduce,
    });
  };

  description = (myArray) => {
    const { artistName, collectionName } = myArray[0];
    this.setState({
      requestAlbum: [artistName, collectionName],
    });
  };

  render() {
    const { requestAlbum, requestMusics } = this.state;
    const [artistName, collectionName] = requestAlbum;
    return (
      <div data-testid="page-album">
        <Header />
        <h3 data-testid="artist-name">{ artistName }</h3>
        <h3 data-testid="album-name">{ collectionName }</h3>
        {
          requestMusics.map((element) => (
            <MusicCard
              key={ element.trackNumber }
              trackName={ element.trackName }
              previewUrl={ element.previewUrl }
              trackNumber={ element.trackNumber }
            />
          ))
        }
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.number,
  requestAlbum: PropTypes.array,
  requestMusics: PropTypes.array,
}.isRequired;
