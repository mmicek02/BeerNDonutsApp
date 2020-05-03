import React, { Component } from 'react'
import BeerPairingListContext from '../../Context/BeerPairingListContext'
import BeerPairingApiService from '../../Services/BeerPairingApiService'
import BeerStyles from '../../Components/BeerStyles/BeerStyles'

export default class DonutStylePage extends Component {
    static contextType = BeerPairingListContext

    compoenntDidMount() {
        this.context.clearError()
        BeerPairingApiService.getBeerPairings()
            .then(this.context.setBeerPairings)
            .catch(this.context.setError)
    }

    renderBeerStyles() {
        const { beerPairings = [] } = this.context
        return beerPairings.map(beer => 
            <BeerStyles 
                key={beer.id}
                beer = { beer }
            />)
    }

    render() {
        const { error } = this.context
        return (
            <div>
            {error
                ? <p className='red'>There was an error, try again</p>
                : this.renderBeerStyles()}
            </div>
        )
        
    }
}