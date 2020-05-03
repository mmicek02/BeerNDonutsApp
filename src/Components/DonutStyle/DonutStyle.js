import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DonutStyles.css'

export default class DonutStyles extends Component {
        render(){
            const { beer } = this.props
            return(
                <Link to={`/api/beerpairing/${beer.id}`} className='BeerListItem'>
                    <header className='BeerListItem__header'>
                        <h2 className='BeerListItem__heading'>
                            {beer.style}
                        </h2>
                    </header>
                </Link>
            )
        }
    }