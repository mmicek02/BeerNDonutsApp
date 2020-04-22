import React, { Component } from 'react'
import BeerPairingForm from '../../Components/BeerPairingForm/BeerPairingForm';

export default class SelectBeer extends Component {

  render() {
    return (
      <div className='SelectBeer'>
        <h2>Select a Beer</h2>
        <BeerPairingForm />
      </div>
    )
  }
}