import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import BeerPairingListContext from '../../Context/BeerPairingListContext'
import BeerPairingApiService from '../../Services/BeerPairingApiService'

import './BeerStyles.css'

export default class BeerStyles extends Component {

    static contextType = BeerPairingListContext

    componentDidMount() {
        this.context.clearError()
        BeerPairingApiService.getBeerPairings()
            .then(this.context.setBeerPairingList)
            .catch(this.context.setError)
    }

    render(){
        const { beer } = this.props
        return(
            <Link to={`/beerpairings/${beer.id}`} className='BeerListItem'>
                <header className='BeerListItem__header'>
                    <h2 className='BeerListItem__heading'>
                        {beer.style}
                    </h2>
                </header>
            </Link>
        )
    }
}