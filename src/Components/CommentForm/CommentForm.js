import React from 'react'
import BeerContext from '../../Context/BeerContext'
import BeerPairingApiService from '../../Services/BeerPairingApiService'

import './CommentForm.css'

class CommentForm extends React.Component {
  static contextType = BeerContext

  handleSubmit = ev => {
      ev.preventDefault()
      const { beer } = this.context
      const { text } = ev.target
      BeerPairingApiService.postComment(beer.id, text.value)
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
            <div class='text'>
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
            <button type='submit' className="CommentForm__submit">
              Post comment
            </button>
          </form>
        )
      }
}
export default CommentForm