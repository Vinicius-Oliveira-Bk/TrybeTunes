import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Components/Loading';

export default class Header extends Component {
  state = {
    user: '',
    inLoading: false,
  };

  componentDidMount() {
    this.getStateUser();
  }

  getStateUser = async () => {
    this.setState({ inLoading: true });
    const request = await getUser();
    this.setState({
      user: request.name,
      inLoading: false,
    });
  };

  render() {
    const { user, inLoading } = this.state;
    return (
      <div data-testid="header-component">
        {
          inLoading && <Loading />
        }
        <h3 data-testid="header-user-name">{ user }</h3>
        <Link
          to="/search"
          data-testid="link-to-search"
        >
          pesquisa
        </Link>
        <Link
          to="/favorites"
          data-testid="link-to-favorites"
        >
          favoritos
        </Link>
        <Link
          to="/profile"
          data-testid="link-to-profile"
        >
          perfil
        </Link>
      </div>
    );
  }
}
