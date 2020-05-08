import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Media/logo.jpg'
import './NavBar.css'

class NavBar extends React.Component {
    render() {
        return (
            <header>
                <Link to='/'>
                    <img src={logo} alt='Logo' className='logo' />
                </Link>

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
                            to='/beerpairings'>
                                Beers
                        </Link>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default NavBar