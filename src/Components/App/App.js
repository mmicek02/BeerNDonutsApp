import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

import SelectBeer from '../../Routes/SelectBeer/SelectBeer'
import LandingPage from '../../Routes/LandingPage/LandingPage';
import PairingResultsPage from '../../Routes/PairingResultsPage/PairingResultsPage';
import BeerStylePage from '../../Routes/BeerStylePage/BeerStylePage';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      hasError: true
    }
  }

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
        path={'/beerpairings/:beerId'}
        component={PairingResultsPage} />
      <Route 
        exact path="/beerpairings"
        component={BeerStylePage} />
      </>
    )
  }

  render() {
    return (
        <div className='App'>
          <header className='App__header'>
            <NavBar/>
          </header>
          <main className='App__main'>
            {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
            {this.renderMainRoutes()}
          </main>
        </div>
    );
  }

}

export default withRouter(App);