import React from 'react'
import './BeerPairingForm.css'

class BeerPairingForm extends React.Component {
    render() {
        return(
            <form className='beer__form'>
                <div>
                    <select name='beer-style' id='beer-style'>
                        <option value="ipa">IPA</option>
                        <option value="brown-ale">Bronwn Ale</option>
                        <option value="stout">Stout</option>
                        <option value="porter">Porter</option>
                        <option value="sour">Sour</option>
                        <option value="wheat-ale">Wheat Ale</option>
                    </select>
                </div>
                <button
                    className="beerSubmit" 
                    type='submit'>Let's Get Tasting</button>
            </form>
        )
    }
}
export default BeerPairingForm