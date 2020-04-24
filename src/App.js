import React, { Component } from 'react';
import NavBar from './Components//NavBar/NavBar';
import SelectBeer from './Routes/SelectBeer/SelectBeer'
import { Route } from 'react-router-dom';
import PairingResults from './Components/PairingResults/PairingResults';
import BeerStyles from './Components/BeerStyles/BeerStyles';

class App extends Component {
  renderMainRoutes() {
    return (
      <>
      <Route
        path="/pairings" 
        component={SelectBeer}/>
      <Route
        path="/pairing-results"
        component={PairingResults} />
      <Route 
        path="/beer-styles"
        component={BeerStyles} />
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