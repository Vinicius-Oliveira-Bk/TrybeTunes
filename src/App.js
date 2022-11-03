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
        <Link to="/pages/" component={ Login } />
        <Link to="/pages/search" component={ Search } />
        <Link to="/pages/album/:id" component={ Album } />
        <Link to="/pages/favorites" component={ Favorites } />
        <Link to="/pages/profile" component={ Profile } />
        <Link to="/pages/profile/edit" component={ ProfileEdit } />
        <Link to="/pages/NotFound" component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
