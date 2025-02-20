import React from 'react';
import ReactDOM from 'react-dom/client'; // Remplace react-dom par react-dom/client
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Utilise createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
