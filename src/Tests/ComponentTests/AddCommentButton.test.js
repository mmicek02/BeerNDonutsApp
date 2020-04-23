import React from 'react';
import ReactDOM from 'react-dom'
import AddCommentButton from '../../Components/AddCommentButton/AddCommentButton'

describe(`AddCommentButton component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <AddCommentButton />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})