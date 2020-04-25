import React from 'react'
import BeerPairingForm from '../../Components/BeerPairingForm/BeerPairingForm'
import './LandingPage.css'

class LandingPage extends React.Component {
    render(){
        return(
            <>
                <div className="flex-container">
                    <div className="flex-item flex-item-1">
                        <h3>About the App</h3>
                        <p>Wine has cheese, now beer has donuts. This apps helps you navigate the world of beer and donut pairings. This niche perfectfly combines two amazing things. Great craft beer and delcious donuts! Use the simple pairing app to learn what donut goes best with the beer you are drinking!</p>
                    </div>
                    <h2>Start Here!</h2>
                    <div className="landing-page-component">
                        <BeerPairingForm />
                    </div>
                </div>
                <br />

            </>
        )
    }
}
export default LandingPage