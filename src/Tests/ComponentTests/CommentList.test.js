import React from 'react';
import ReactDOM from 'react-dom'
import CommentList from '../../Components/CommentList/CommentList'

describe(`CommentList component`, () => {

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(
            <CommentList />,div);
    ReactDOM.unmountComponentAtNode(div);
  })

})