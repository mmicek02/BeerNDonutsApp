import React, { Component } from 'react';
import NavBar from './Components//NavBar/NavBar';
import SelectBeer from './Routes/SelectBeer/SelectBeer'
import { Route } from 'react-router-dom';
import PairingResultsPage from './Routes/PairingResultsPage/PairingResultsPage';
import BeerStyles from './Components/BeerStyles/BeerStyles';
import DonutStyles from './Components/DonutStyle/DonutStyle';
import LandingPage from './Routes/LandingPage/LandingPage';

class App extends Component {
  renderMainRoutes() {
    return (
      <>
      <Route 
        exact path ="/"
        component={LandingPage} />
      <Route
        path="/pairings" 
        component={SelectBeer}/>
      <Route
        path="/pairing-results"
        component={PairingResultsPage} />
      <Route 
        path="/beer-styles"
        component={BeerStyles} />
      <Route 
        path="/donut-styles"
        component={DonutStyles} />
      </>
    )
  }

  render() {
    return (
      <main className='App'>
        <NavBar/>
        {this.renderMainRoutes()}
      </main>
    );
  }

}

export default App;