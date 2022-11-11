import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './Components/Loading';

export default class Login extends Component {
  state = {
    inLoading: false,
    valorLogin: '',
  };

  onSaveButtonClick = async (event) => {
    const { valorLogin } = this.state;
    event.preventDefault();
    this.setState({
      inLoading: true,
    });
    await createUser({ name: valorLogin });
    this.setState({
      valorLogin: '',
    }, () => {
      const { history } = this.props;
      history.push('/search');
    });
  };

  isButtonDisabled = () => {
    const { valorLogin } = this.state;
    const number = 3;
    const validate = valorLogin.length >= number;

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
    const {
      inLoading,
      valorLogin,
    } = this.state;
    return (
      <div data-testid="page-login">
        {
          inLoading && <Loading />
        }
        <form>
          <input
            type="text"
            name="valorLogin"
            valorLogin={ valorLogin }
            data-testid="login-name-input"
            onChange={ this.onInputChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ this.isButtonDisabled() }
            onClick={ this.onSaveButtonClick }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  valorLogin: PropTypes.string,
  onInputChange: PropTypes.func,
  isButtonDisabled: PropTypes.bool,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
