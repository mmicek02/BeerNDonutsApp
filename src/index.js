import React from 'react';
import ReactDOM from 'react-dom';
import { BeerPairingListProvider } from './Context/BeerPairingListContext'
import { BeerProvider } from './Context/BeerContext'
import App from '../src/Components/App/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <BeerPairingListProvider>
      <BeerProvider>
        <App />
      </BeerProvider>
    </BeerPairingListProvider>
  </BrowserRouter>, document.getElementById('root'));