import React, { Component } from 'react'

const BeerPairingContext = React.createContext({
    beerPairings: [],
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
        beerPairings: [],
        error: null,
    };

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setBeerPairings = beerPairings => {
        this.setState({ beerPairings })
    }

    addComment = comment => {
        this.setComments([
            ...this.state.comments,
            comment
        ])
    }

    render() {
        const value = {
            beerPairings: this.state.beerPairings,
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