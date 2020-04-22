import React, { Component } from 'react';
import NavBar from './Components//NavBar/NavBar';
import SelectBeer from './Routes/SelectBeer/SelectBeer'
import { Route } from 'react-router-dom';

class App extends Component {
  renderMainRoutes() {
    return (
      <>
      <Route
        path="/parings" 
        component={SelectBeer}/>
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