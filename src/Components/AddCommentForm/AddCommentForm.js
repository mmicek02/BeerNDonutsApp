import React from 'react'
import BeerPairingContext from '../../Context/BeerPairingContext'
import BeerPairingApiService from '../../Services/BeerPairingApiService'

import './AddCommentForm.css'

class AddCommentForm extends React.Component {
    handleSubmit = ev => {
        ev.preventDefault()
        const { beerPairing } = this.context
        const { text } = ev.target
        BeerPairingApiService.postComment(beerPairing.id, text.value)
          .then(this.context.addComment)
          .then(() => {
            text.value = ''
          })
          .catch(this.context.setError)
      }
    
      render() {
        return (
          <form
            className='CommentForm'
            onSubmit={this.handleSubmit}
          >
            <div className='text'>
              <input
                required
                aria-label='Type a comment...'
                name='text'
                id='text'
                cols='30'
                rows='3'
                placeholder='Type a comment..'>
              </input>
            </div>
            <button type='submit'>
              Post comment
            </button>
          </form>
        )
      }
}
export default AddCommentForm