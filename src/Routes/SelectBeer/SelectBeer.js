import React, { Component } from 'react'
import BeerPairingForm from '../../Components/BeerPairingForm/BeerPairingForm';
import './SelectBeer.css'

export default class SelectBeer extends Component {
  render() {
    return (
      <div className='SelectBeer'>
        <h2>Find a perfect paring!</h2>
        <BeerPairingForm />
      </div>
    )
  }
}