import React, { Component } from 'react'
import BeerPairingApiService from '../../Services/BeerPairingApiService'
import BeerPairingListContext from '../../Context/BeerPairingListContext'

import './BeerPairingForm.css'

class BeerPairingForm extends Component {
    static contextType = BeerPairingListContext;

    componentDidMount() {
        this.context.clearError()
        BeerPairingApiService.getBeerPairings()
            .then(this.context.setBeerPairingList)
            .catch(this.context.setError)
    }


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            style: '',
            touched: false,
        }
    }

    updateBeerStyle = (beer) => {
        this.setState({
            id: beer.id,
            style: beer.style,
            touched: true,
        })
    }

    handleSubmit = ev => {
        ev.preventDeafault();
        console.log(this.updateBeerStyle())
        const pairingInfo = {
            id: this.state.id,
            style: this.state.style
        }

        const url = `http://localhost:8000/api/beerpairings`;
        const options = {
            method: 'GET',
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
            this.props.history.push(`/pairing-results`)
        })
        .catch(err => {
            this.setState({
                error: err.message
            })
        })
    }
    render() {
        const { beerPairings = [] } = this.context
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
                            {/* {beerPairings.map(beerName =>
                                <option key={beerName.id} value={beerName.id}>
                                    {beerName.style}
                                </option>)} */}
                            {beerPairings.map(beerName => <option key={beerName.id} value={beerName.id}>{beerName.style}</option>)}
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