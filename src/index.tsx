import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';
import { UserProvider } from './context/UserContext';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
      <GlobalStyle />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
