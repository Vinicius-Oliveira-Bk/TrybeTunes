import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { createUser } from '../services/userAPI';

export default class Login extends Component {
  render() {
    const {
      loginInput,
      isButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div data-testid="page-login">
        <form>
          <input
            type="text"
            name="loginInput"
            loginInput={ loginInput }
            data-testid="login-name-input"
            value={ loginInput }
            onChange={ onInputChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ isButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginInput: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  isButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
