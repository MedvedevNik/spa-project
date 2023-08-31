import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const routerBaseName = process.env.PUBLIC_URL;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={routerBaseName}>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();