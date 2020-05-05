import React, { Component } from 'react'
import BeerPairingApiService from '../../Services/BeerPairingApiService'
import BeerPairingListContext from '../../Context/BeerPairingListContext'
import ValidationError from '../../ValidationError'

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
            touched: false,
        }
    }

    updateBeerId = (beerId) => {
        this.setState({
            id: beerId,
            touched: true,
        })

        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault();

        const pairingInfo = {
            id: this.state.id,
        }

        const url = `http://localhost:8000/api/beerpairings/${pairingInfo.id}`;
        const options = {
            method: 'GET',
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
            console.log(resJson)
            this.context.beerPairings.push(resJson)
            this.props.history.push(`/beerpairings/${pairingInfo.id}`)
        })
        .catch(err => {
            console.log(err)
            this.setState({
                error: err.message
            })
        })
    }

    validateBeerSelect() {
        const selectedBeer = this.state.id;
        if(selectedBeer === '') {
          return 'You must choose a beer';
        }
    }

    render() {
        const { beerPairings = [] } = this.context
        const beerError = this.validateBeerSelect();

        return(
            <div>
                <form 
                    className='beer__form'
                    onSubmit={this.handleSubmit}>
                    <div>
                        <select name='beerId' id='beer_id' onChange={e => this.updateBeerId(e.target.value)} value={this.state.selectedBeer}>
                            <option value="">Choose a Beer</option>
                                {beerPairings.map(beerId => <option key={beerId.id} value={beerId.id}>{beerId.style}</option>)}
                        </select>
                    </div>

                    <button
                        type='submit'
                        className="beerSubmit"
                        disabled = {
                            this.validateBeerSelect()
                        }
                        > Let's Get Tasting</button>  
                </form>
                <br />
                <div className="errorText">
                    {<ValidationError message={beerError} />}
                </div>
            </div>
        )
    }
}
export default BeerPairingForm