import React, { Component } from 'react'

export const nullBeer = {
    style: {}
}

const BeerContext = React.createContext({
    beer: nullBeer,
    comments: [],
    error: null,
    setError: () => {},
    clearError: () => {},
    setBeer: () => {},
    clearBeer: () => {},
    setComments: () => {},
    addComment: () => {},
})

export default BeerContext

export class BeerProvider extends Component {
    state = {
        beer: nullBeer,
        error: null,
    }

    setError = error => {
        console.error(error)
        this.setState({ error })
    }
    
    clearError = () => {
        this.setState({ error: null })
    }
    
    setBeer = beer => {
        this.setState({ beer })
    }

    setComments = comments => {
        this.setState({ comments })
    }

    clearBeer = () => {
        this.setBeer(nullBeer)
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
            error: this.state.error,
            setError: this.setError,
            clearError: this.clearError,
            setBeer: this.setBeer,
            setComments: this.setComments,
            clearBeer: this.clearBeer,
            addComment: this.addComment,
        }
        return (
            <BeerContext.Provider value={value}>
                {this.props.children}
            </BeerContext.Provider>
        )
    }
}