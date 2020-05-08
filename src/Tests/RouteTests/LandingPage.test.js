import React from 'react';
import ReactDOM from 'react-dom'
import LandingPage from '../../Routes/LandingPage/LandingPage'
import { BrowserRouter } from 'react-router-dom';

describe(`LandingPage component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
          <BrowserRouter>
            <LandingPage />
          </BrowserRouter>
           ,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})