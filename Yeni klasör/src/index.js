import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/root/App';
import "./components/i18nextConf.js";
import "./components/i18nextInit.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
