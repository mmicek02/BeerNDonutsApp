import React, { Component } from 'react'

import BeerPairingApiService from '../../Services/BeerPairingApiService'
import BeerContext from '../../Context/BeerContext'
import CommentForm from '../../Components/CommentForm/CommentForm'

import './PairingResultsPage.css'


export default class PairingResultsPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }
  
  static contextType = BeerContext
  componentDidMount() {
    const { beerId } = this.props.match.params
    this.context.clearError()
    BeerPairingApiService.getBeerPairing(beerId)
      .then(this.context.setBeer)
      .catch(this.context.setError)
    BeerPairingApiService.getBeerPairingsComments(beerId)
      .then(this.context.setComments)
      .catch(this.context.setError)
  }

  componentWillMount() {
    this.context.clearBeer()
  }

  renderPairing() {
    const { beer, comments } = this.context
    return <>
      <div className='flex-container'>
        <div className='flex-container__header'>
          {beer.style}<br />{' & '}<br />{beer.donut_pairing}
        </div>
      </div>
      <p>{beer.tasting_notes}</p>
      <h3>Comments</h3>
      <BeerPairingComments comments={comments} />
      <CommentForm />
    </>
  }

  render() {
    const { error, beer } = this.context
    let content
    if (error) {
      content = (error.error === `Beer and Donut Paiting doesn't exist`)
        ? <p className='red'>Pairing not found</p>
        : <p className='red'>There was an error</p>
    } else if (!beer.id) {
      content = <div className='loading' />
    } else {
      content = this.renderPairing()
    }
    return (
      <div className='PairingPage'>
        {content}
      </div>
    )
  }
}

function BeerPairingComments({ comments = [] }) {
  return (
    <ul className='PairingPage__comment-list'>
      {comments.map(comment =>
        <li key={comment.id} className='PairingPage__comment'>
          <p className='PairingPage__comment-text'>
            {comment.text}
          </p>
        </li>
      )}
    </ul>
  )
}