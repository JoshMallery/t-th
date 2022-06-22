
import './App.css';
import React, { Component } from 'react';
import Form from './Components/Form';
import PokeContainer from './Components/PokeContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: false,
      error: '',
      tempResults: []
    }
  }

  componentDidMount = () => {
    this.setState({ results:[{classfication: "", name: 'Use the search bar to Find pokemon!'}]})
  }

  getPoke = (searchQuery) => {
    this.setState({ tempResults: [], results: [] })
    this.gottaFetchumAll(searchQuery)
  }

  gottaFetchumAll = (searchQuery, nextPages = '') => {

    this.setState({ loading: true })

    fetch(`https://hungry-woolly-leech.glitch.me/api/pokemon/search/${searchQuery+nextPages+'?chaos=true'}`)
      .then(response => response.json())
      .then(response => {
        this.setState({ tempResults: [...this.state.tempResults, ...response.pokemon] })
        return response
    })
    .then(response => {
      if(response.nextPage) {
        this.gottaFetchumAll(searchQuery, `?page=${response.nextPage}`)
      }
      return response
    })
    .then(response => this.setState({results: [...this.state.tempResults, ...response.pokemon], loading: false }))

      .catch(error =>{
        this.setState({ error: error.message, loading: false })
      })

}

  render() {
    return (
      <div className="App">
          <p>Search for a Pokemon!</p>
          <Form getPoke={this.getPoke}/>
          {!this.state.loading ? <PokeContainer results={this.state.results} /> : <p>...Loading</p>}
      </div>
    );

  }
}

export default App;
