import React from 'react'
import './LandingPage.css'

class LandingPage extends React.Component {
    render(){
        return(
            <>
                <div className="flex-container">                        
                    <div className="landing-page-heading">About the App</div>
                    <div className="flex-item flex-item-1">
                        <p>Wine has cheese, now beer has donuts. This apps helps you navigate the world of beer and donut pairings. This niche perfectfly combines two amazing things... Great craft beer and yummy donuts! Use the simple pairing app to learn what donut goes best with the beer you are drinking!</p>
                    </div>
                    <div className="flex-item flex-item-2">
                        <h3>
                            Click "Discover" to find the perfrect pairing now!
                        </h3>
                    </div>
                </div>
                <br />

            </>
        )
    }
}
export default LandingPage