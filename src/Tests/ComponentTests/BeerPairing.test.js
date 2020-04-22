import React from 'react';
import ReactDOM from 'react-dom'
import BeerPairingForm from '../../Components/BeerPairingForm/BeerPairingForm'

describe(`BeerPairingForm component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <BeerPairingForm />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})