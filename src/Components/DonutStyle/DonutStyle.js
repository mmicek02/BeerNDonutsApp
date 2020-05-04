import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DonutStyles.css'

export default class DonutStyles extends Component {
        render(){
            const { beer } = this.props
            return(
                <Link to={`/beerpairings/${beer.id}`} className='BeerListItem'>
                    <header className='BeerListItem__header'>
                        <h2 className='BeerListItem__heading'>
                            {beer.donut_pairing}
                        </h2>
                    </header>
                </Link>
            )
        }
    }