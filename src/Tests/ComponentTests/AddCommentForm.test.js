import React from 'react';
import ReactDOM from 'react-dom'
import AddCommentForm from '../../Components/AddCommentForm/AddCommentForm'

describe(`AddCommentForm component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <AddCommentForm />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})