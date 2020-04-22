import React from 'react'

class BeerPairingForm extends React.Component {
    render(){
        return(
            <form className='beer-form'>
                <div>
                <h3>Select a style of beer</h3>
                <select name='beer-style' id='beer-style'>
                    <option value="ipa">IPA</option>
                    <option value="brown-ale">Bronwn Ale</option>
                    <option value="stout">Stout</option>
                    <option value="porter">Porter</option>
                    <option value="sour">Sour</option>
                    <option value="wheat-ale">Wheat Ale</option>
                </select>
                </div>
                <button type='submit'>Let's Get Tasting</button>
            </form>
        )
    }
}
export default BeerPairingForm