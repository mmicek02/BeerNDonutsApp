import React from 'react';
import ReactDOM from 'react-dom'
import SelectBeer from '../../Routes/SelectBeer/SelectBeer'
import { BrowserRouter } from 'react-router-dom';

describe(`SelectBeer component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
          <BrowserRouter>
            <SelectBeer />
          </BrowserRouter>
           ,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})