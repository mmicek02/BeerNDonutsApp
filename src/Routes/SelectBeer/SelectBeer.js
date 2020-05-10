import React, { Component } from 'react'

import BeerPairingApiService from '../../Services/BeerPairingApiService'
import BeerPairingListContext from '../../Context/BeerPairingListContext'

import BeerPairingForm from '../../Components/BeerPairingForm/BeerPairingForm';

import './SelectBeer.css'

export default class SelectBeer extends Component {
  static contextType = BeerPairingListContext;

  componentDidMount() {
      this.context.clearError()
      BeerPairingApiService.getBeerPairings()
          .then(this.context.setBeerPairings)
          .catch(this.context.setError)
  }

  // renderBeers() {
  //     const { beerPairings = [] } = this.context
  //     return beerPairings.map(beer => 
  //     )
  // }
  render() {
    return (
      <div className='SelectBeer'>
        <br />
        <BeerPairingForm />
      </div>
    )
  }
}