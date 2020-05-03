import React, { Component } from 'react'
import BeerPairingListContext from '../../Context/BeerPairingListContext'
import BeerPairingApiService from '../../Services/BeerPairingApiService'
import BeerStyles from '../../Components/BeerStyles/BeerStyles'

export default class BeerStylePage extends Component {
    static contextType = BeerPairingListContext

    componentDidMount() {
        this.context.clearError()
        BeerPairingApiService.getBeerPairings()
            .then(this.context.setBeerPairingList)
            .catch(this.context.setError)
    }

    renderBeerStyles() {
        const { beerPairings = [] } = this.context
        return beerPairings.map(beer => 
            <BeerStyles 
                key={beer.id}
                beer={beer}
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