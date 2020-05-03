import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import NavBar from '../NavBar/NavBar';

import SelectBeer from '../../Routes/SelectBeer/SelectBeer'
import LandingPage from '../../Routes/LandingPage/LandingPage';
import PairingResultsPage from '../../Routes/PairingResultsPage/PairingResultsPage';
import BeerStylePage from '../../Routes/BeerStylePage/BeerStylePage';
import DonutStyles from '../../Routes/DonutStylePage/DonutStylePage';

import CommentForm from '../CommentForm/CommentForm';


class App extends Component {
  state = {
    hasError: false
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
        path="/pairing-results"
        component={PairingResultsPage} />
      <Route 
        path="/beer-styles"
        component={BeerStylePage} />
      <Route 
        path="/donut-styles"
        component={DonutStyles} />
      <Route
        path="add-comment"
        component={CommentForm} />
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

export default App;