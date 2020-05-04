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
            style: '',
            touched: false,
        }
    }

    updateBeerStyle = (beerName) => {
        this.setState({
            id: beerName.id,
            style: beerName.style,
            touched: true,
        })

        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDeafault();

        const pairingInfo = {
            id: this.state.id,
            style: this.state.style
        }
        console.log(pairingInfo)
        const url = `http://localhost:8000/api/beerpairings/`;
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
            //this.context.beerPairings.push(resJson)
            this.props.history.push(`/beerpairings/${pairingInfo.id}`)
        })
        .catch(err => {
            this.setState({
                error: err.message
            })
        })
    }

    validateBeerSelect() {
        const beer = this.state.id;
        if(beer === '') {
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
                        <select name='style' id='beer_id' onChange={e => this.updateBeerStyle(e.target.value)}>
                            <option value="">Choose a Beer</option>
                                {beerPairings.map(beerName => <option key={beerName.id} value={beerName.id}>{beerName.style}</option>)}
                        </select>
                    </div>

                    <button
                        type='submit'
                        className="beerSubmit"
                        onClick={e => this.handleSubmit(e)}
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