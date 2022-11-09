import React from 'react';
import { BrowserRouter, Link, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import { createUser } from './services/userAPI';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.isButtonDisabled = this.isButtonDisabled.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
  }

  state = {
    loginInput: '',
  };

  onInputChange = (event) => {
    const { name, type, checked } = event.target;
    const value = type === 'checkbox' ? checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };

  isButtonDisabled = () => {
    const { loginInput } = this.state;
    const number = 3;
    const validate = loginInput.length >= number;

    return !(validate);
  };

  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { loginInput } = this.state;

    createUser({ name: loginInput });

    this.setState({
      loginInput: '',
    });
  };

  render() {
    const { loginInput } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Link
            to="/"
            component={ Login }
            loginInput={ loginInput }
            onInputChange={ this.onInputChange }
            isButtonDisabled={ this.isButtonDisabled() }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Link to="/search" component={ Search } />
          <Link to="/album/:id" component={ Album } />
          <Link to="/favorites" component={ Favorites } />
          <Link to="/profile" component={ Profile } />
          <Link to="/profile/edit" component={ ProfileEdit } />
          <Link to="/NotFound" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
