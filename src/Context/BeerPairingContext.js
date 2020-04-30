import React, { Component } from 'react'

const BeerPairingContext = React.createContext({
    beerpairings: [],
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

    setError = error => {
        console.log(error)
        this.setState({ error })
    }

    clearError = () => {
        this.setState({ error: null })
    }

    setBeerPairing = beerpairings => {
        this.setState({ beerpairings })
    }

    addComment = comment => {
        this.setComments([
            ...this.state.comments,
            comment
        ])
    }

    render() {
        const value = {
            beerpairings: this.state.beerpairings,
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