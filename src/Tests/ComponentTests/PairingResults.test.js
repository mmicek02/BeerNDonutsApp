import React from 'react';
import ReactDOM from 'react-dom'
import PairingResults from '../../Components/PairingResults/PairingResults'

describe(`PairingResults component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <PairingResults />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})