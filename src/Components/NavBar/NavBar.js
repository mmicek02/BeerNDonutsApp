import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <h1 className="logo">Beer 'N Donuts</h1>
                <nav>
                    <ul className="nav__links">
                        <Link
                            className="link__option" 
                            to='/'>
                                Home
                        </Link>
                        <Link 
                            className="link__option"
                            to='/pairings'>
                                Pairings
                        </Link>
                        <Link 
                            className="link__option"
                            to='/beer-styles'>
                                Beers
                        </Link>
                        <Link 
                            className="link__option"
                            to='/donut-types'>
                                Donuts
                        </Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar