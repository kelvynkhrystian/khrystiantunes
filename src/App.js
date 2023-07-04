import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './components/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

import '@fortawesome/fontawesome-free/css/all.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/header" component={ Header } />
            <Route exact path="/" component={ Login } />
            <Route exact path="/search" component={ Search } />
            <Route exact path="/album/:id" component={ Album } />
            <Route exact path="/favorites" component={ Favorites } />
            <Route exact path="/profile/edit" component={ ProfileEdit } />
            <Route exact path="/profile" component={ Profile } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
