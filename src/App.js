import React, { Component } from 'react';
import NavBar from './Components//NavBar/NavBar';
import SelectBeer from './Routes/SelectBeer/SelectBeer'
import { Route } from 'react-router-dom';
import PairingResultsPage from './Routes/PairingResultsPage/PairingResultsPage';
import BeerStyles from './Components/BeerStyles/BeerStyles';
import DonutStyles from './Components/DonutStyle/DonutStyle';
import LandingPage from './Routes/LandingPage/LandingPage';
import config from './config'

class App extends Component {
  state = {
    beerpairings: [],
    comments: []
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/beerpairings`),
      fetch(`${config.API_ENDPOINT}/comments`)
    ])
      .then(([beerpairingsRes, commentsRes]) => {
        if (!beerpairingsRes.ok)
          return beerpairingsRes.json().then(e => Promise.reject(e))
        if (!commentsRes.ok)
          return commentsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          beerpairingsRes.json(),
          commentsRes.json(),
        ])
      })
      .then(([beerpairings]) => {
        this.setState({ beerpairings })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  hanldeAddComment = comment => {
    this.setState({
      comments: [
        ...this.state.comments,
        comment
      ]
    })
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