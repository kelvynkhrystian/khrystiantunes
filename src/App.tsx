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

const routes = [
  { path: '/', element: <Login /> },
  { path: '/search', element: <Search /> },
  { path: '/album/:id', element: <Album /> },
  { path: '/favorites', element: <Favorites /> },
  { path: '/profile/edit', element: <ProfileEdit /> },
  { path: '/profile', element: <Profile /> },
  { path: '*', element: <NotFound /> },
];

const App = () => {
  return (
    <main>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </main>
  );
};

export default App;
