import React from 'react';
import ReactDOM from 'react-dom'
import SelectBeer from '../../Routes/SelectBeer/SelectBeer'

describe(`SelectBeer component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <SelectBeer />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})