import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/" component={ Login } />
        <Link to="/search" component={ Search } />
        <Link to="/album/:id" component={ Album } />
        <Link to="/favorites" component={ Favorites } />
        <Link to="/profile" component={ Profile } />
        <Link to="/profile/edit" component={ ProfileEdit } />
        <Link to="/NotFound" component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
