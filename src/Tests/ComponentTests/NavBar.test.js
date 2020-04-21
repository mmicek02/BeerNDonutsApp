import React from 'react';
import ReactDOM from 'react-dom'
import NavBar from '../../Components/NavBar/NavBar'
import { BrowserRouter } from 'react-router-dom'

describe(`NavBar component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})