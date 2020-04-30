import React, { Component } from 'react'
import './PairingResults.css'

class PairingResults extends Component {
    render(){
        const { beer } = this.props
        return(
            <>
                <div className="flex-container">
                    <div className="flex-item flex-item-1">
                        {beer.id}
                    </div>
                    <h3>{' & '}</h3>
                    <div className="flex-item flex-item-2">
                        {beer.style}
                    </div>
                    <br />
                </div>
            </>
        )
    }
}
export default PairingResults