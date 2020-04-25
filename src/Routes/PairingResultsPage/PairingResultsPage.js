import React, { Component } from 'react'
import PairingResults from '../../Components/PairingResults/PairingResults';
import CommentList from '../../Components/CommentList/CommentList';
import AddCommentButton from '../../Components/AddCommentButton/AddCommentButton'

import './PairingResultsPage.css'

export default class PairingResultsPage extends Component {
  render() {
    return (
      <div className='PairingResultsPage'>
        <h2>The Perfect Pairing!</h2>
        <PairingResults />
        <AddCommentButton />
        <CommentList />
      </div>
    )
  }
}