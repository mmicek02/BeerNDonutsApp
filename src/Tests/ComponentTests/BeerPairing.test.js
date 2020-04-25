import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import BeerPairingForm from '../../Components/BeerPairingForm/BeerPairingForm'

describe(`BeerPairingForm component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <BeerPairingForm />
      </BrowserRouter>
            ,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})