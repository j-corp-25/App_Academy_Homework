import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { PupProvider } from './context/PupContext';

const Root = () => {
  return (
    <BrowserRouter>
      <PupProvider>
        <App />
      </PupProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
