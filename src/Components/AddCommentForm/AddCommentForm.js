import React from 'react'
import './AddCommentForm.css'

class AddCommentForm extends React.Component {
    handleSubmit = ev => {
        ev.preventDefault()
      }
    
      render() {
        return (
          <form
            className='CommentForm'
            onSubmit={this.handleSubmit}
          >
            <div className='text'>
              <Textarea
                required
                aria-label='Type a comment...'
                name='text'
                id='text'
                cols='30'
                rows='3'
                placeholder='Type a comment..'>
              </Textarea>
            </div>
            <Button type='submit'>
              Post comment
            </Button>
          </form>
        )
      }
}
export default AddCommentForm