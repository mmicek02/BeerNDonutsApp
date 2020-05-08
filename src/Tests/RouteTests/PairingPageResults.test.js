import React from 'react';
import ReactDOM from 'react-dom'
import PairingResultsPage from '../../Routes/PairingResultsPage/PairingResultsPage'
import { BrowserRouter } from 'react-router-dom';

describe(`PairingResultsPage component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
          <BrowserRouter>
            <PairingResultsPage />
          </BrowserRouter>
           ,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})