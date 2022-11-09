import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import 'modern-normalize/modern-normalize.css';
import GlobalStyle from 'GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/sandra-schedule">
      <GlobalStyle />
        <App />
    </BrowserRouter>
  </React.StrictMode>
);