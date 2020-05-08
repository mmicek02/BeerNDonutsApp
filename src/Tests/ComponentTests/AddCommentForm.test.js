import React from 'react';
import ReactDOM from 'react-dom'
import CommentForm from '../../Components/CommentForm/CommentForm'

describe(`AddCommentForm component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <CommentForm />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})