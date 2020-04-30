import React from 'react'
import BeerPairingContext from '../../Context/BeerPairingContext'
import { Link } from 'react-router-dom'

import './BeerPairingForm.css'

class BeerPairingForm extends React.Component {
    static contextType = BeerPairingContext;
    constructor(props) {
        super(props);
        this.state = {
            style: '',
            touched: false,
        }
    }

    updateBeerStyle = (BeerStyle) => {
        this.setState({
            style: BeerStyle,
            touched: true,
        })
    }

    handleSubmit = ev => {
        ev.preventDeafault();
        console.log(this.state)
        const pairingInfo = {
            style: this.state.beerStyle
        }

        const url = 'http://localhost:8000/api/beerpairings/';
        const options = {
            method: 'POST',
            body: JSON.stringify.apply(pairingInfo),
            headers: {
                'content-type': 'application/json'
            }
        };

        fetch(url, options)

        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again later');
            }
            return res.json();
        })
        .then(resJson => {
            this.context.users.push(resJson)
            this.props.history.push(`/paring-results`)
        })
        .catch(err => {
            this.setState({
                error: err.message
            })
        })
    }
    render() {
        return(
            <form 
                className='beer__form'
                onSubmit={this.handleSubmit}>
                <div>
                    <select 
                        name='style' 
                        id='beer_id'
                        onChange={ev => this.updateBeerStyle(ev.target.value)}>
                        
                        <option value="">Choose a Beer</option>
                            {this.context.beerpairings.map(beerName =>
                                <option key={beerName.id} value={beerName.id}>
                                    {beerName.style}
                                </option>)}
                    </select>
                </div>

                <button
                    type='submit'
                    className="beerSubmit"
                    > Let's Get Tasting</button>
            </form>
        )
    }
}
export default BeerPairingForm