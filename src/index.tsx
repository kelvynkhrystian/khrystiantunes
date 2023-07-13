import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <Router>
     <App />
    </Router>
    {/* <GlobalStyle /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
