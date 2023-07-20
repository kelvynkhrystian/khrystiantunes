import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { UserProvider } from './context/UserContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <FavoritesProvider>
        <Router>
          <App />
        </Router>
      </FavoritesProvider>
      <GlobalStyle />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
