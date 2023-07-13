import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Search from './pages/Search';
import Album from './components/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
// import Header from './components/Header';

// import '@fortawesome/fontawesome-free/css/all.css';

const App = () => {
  return (
    <main>
      <Routes>
        {/* <Route path="/header" element={ <Header /> } /> */}
        <Route path="/" element={ <Login /> } />
        <Route path="/search" element={ <Search /> } />
        <Route path="/album/:id" element={ <Album /> } />
        <Route path="/favorites" element={ <Favorites /> } />
        <Route path="/profile/edit" element={ <ProfileEdit /> } />
        <Route path="/profile" element={ <Profile /> } />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </main>
  );
}

export default App;
