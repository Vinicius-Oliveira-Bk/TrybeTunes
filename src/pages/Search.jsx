import React, { Component } from 'react';
import Header from './Header';

export default class Search extends Component {
  state = {
    submitButton: '',
  };

  isButtonDisabled = () => {
    const { submitButton } = this.state;
    const number = 2;
    const validate = submitButton.length >= number;

    return !(validate);
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { submitButton } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <input
            type="text"
            submitButton={ submitButton }
            data-testid="search-artist-input"
            onChange={ this.onInputChange }
            name="submitButton"
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            disabled={ this.isButtonDisabled() }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}
