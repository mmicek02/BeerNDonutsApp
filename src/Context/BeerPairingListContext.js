import React, { Component } from 'react'

const BeerPairingListContext = React.createContext({
    beerPairings: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBeerPairingList: () => {},
})

export default BeerPairingListContext

export class BeerPairingListProvider extends Component {

    state = {
        beerPairings: [],
        error: null,
    };

    setBeerPairingList = beerPairings => {
        this.setState({ beerPairings })
    }

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    render() {
        const value = {
            beerPairings: this.state.beerPairings,
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBeerPairingList: this.setBeerPairingList
          }
          return (
            <BeerPairingListContext.Provider value={value}>
              {this.props.children}
            </BeerPairingListContext.Provider>
          )
    }
}