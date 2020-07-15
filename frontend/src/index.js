import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import AlertTemplate from 'react-alert-template-basic';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';

const options = {
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '35px',
  transition: transitions.FADE
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);