import React from 'react'
import { Link } from 'react-router-dom'

import './BeerPairingForm.css'

class BeerPairingForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beerValue: '',
            touched: false,
        }
    }

    updateBeerValue = (BeerValue) => {
        this.setState({
            beerValue: BeerValue,
            touched: true,
        })
    }

    handleSubmit = e => {
        e.preventDeafault();
        console.log(this.state)
        // const pairingInfo = {
        //     beerValue: this.state.beerValue
        // }

        // const url = 'http://localhost:8000/api/pairing-results';
        // const options = {
        //     method: 'POST',
        //     body: JSON.stringify.apply(pairingInfo),
        //     headers: {
        //         'content-type': 'application/json'
        //     }
        // };

        // fetch(url, options)

        // .then(res => {
        //     if(!res.ok) {
        //         throw new Error('Something went wrong, please try again later');
        //     }
        //     return res.json();
        // })
        // .then(resJson => {
        //     this.context.users.push(resJson)
        //     this.props.history.push(`/pairing-results`)
        // })
        // .catch(err => {
        //     this.setState({
        //         error: err.message
        //     })
        // })
    }
    render() {
        return(
            <form className='beer__form'>
                <div>
                    <select 
                        name='beer-style' 
                        id='beer-style'>
                        
                        <option 
                            value="ipa">IPA</option>
                        <option value="brown-ale">Bronwn Ale</option>
                        <option value="stout">Stout</option>
                        <option value="porter">Porter</option>
                        <option value="sour">Sour</option>
                        <option value="wheat-ale">Wheat Ale</option>
                    </select>
                </div>

                <Link
                    className="beerSubmit"
                    to='/pairing-results'> Let's Get Tasting</Link>
            </form>
        )
    }
}
export default BeerPairingForm