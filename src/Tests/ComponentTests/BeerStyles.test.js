import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import BeerStyles from '../../Components/BeerStyles/BeerStyles'

describe(`BeerStyles component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
          <BrowserRouter>
            <BeerStyles />
          </BrowserRouter>
            ,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})