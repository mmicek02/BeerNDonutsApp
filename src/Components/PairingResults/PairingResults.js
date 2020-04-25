import React from 'react'
import AddCommentButton from '../AddCommentButton/AddCommentButton'
import CommentList from '../CommentList/CommentList'
import './PairingResults.css'

class PairingResults extends React.Component {
    render(){
        return(
            <>
                <div className="flex-container">
                    <div className="flex-item flex-item-1">
                        Donut
                    </div>
                    <h3>{'&'}</h3>
                    <div className="flex-item flex-item-2">
                        Beer
                    </div>
                    <br />
                </div>
            </>
        )
    }
}
export default PairingResults