import React from 'react';
import ReactDOM from 'react-dom'
import App from '../src/Components/App/App'
import { BrowserRouter } from 'react-router-dom';

describe(`App component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})