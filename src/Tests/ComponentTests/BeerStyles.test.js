import React from 'react';
import ReactDOM from 'react-dom'
import BeerStyles from '../../Components/BeerStyles/BeerStyles'

describe(`BeerStyles component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <BeerStyles />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})