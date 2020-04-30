import React, { Component } from 'react'

export const nullBeerPairing = {
    style: {},
}

const BeerPairingContext = React.createContext({
    beerpairings: nullBeerPairing,
    comments: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBeerPairing: () => {},
    clearBeerParing: () => {},
    setComments: () => {},
    addComment: () => {},
})

export default BeerPairingContext

export class BeerPairingProvider extends Component {
    state = {
        beerpairings: nullBeerPairing,
        error: null,
    };

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setBeerPairing = beerPairing => {
        this.setState({ beerPairing })
    }

    clearBeerPairing = () => {
        this.setState({ BeerPairing: nullBeerPairing })
        this.setComments([])
    }

    addComment = comment => {
        this.setComments([
            ...this.state.comments,
            comment
        ])
    }

    render() {
        const value = {
            beer: this.state.beer,
            comments: this.state.comments,
            setError: this.setError,
            clearError: this.clearError,
            setArticle: this.setArticle,
            setComments: this.setComments,
            clearArticle: this.clearArticle,
            addComment: this.addComment,
          }
          return (
            <BeerPairingContext.Provider value={value}>
              {this.props.children}
            </BeerPairingContext.Provider>
          )
    }
}