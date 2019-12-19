import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav.js'
import HogList from './HogList.js'
import hogs from '../porkers_data';

class App extends Component {
  constructor(){
    super(),
    this.state = {
      original: hogs,
      hogs: hogs,
      showGreased: true,
      sortName: false,
      sortWeight: false
    }

  }

  isGreased = () => {
    const greased = this.state.original.filter(hog => hog.greased === true)
    this.state.showGreased ? 
      this.setState({showGreased: !this.state.showGreased,hogs: greased})
      :
      this.setState({showGreased: !this.state.showGreased,hogs: this.state.original})
  }

  sortName = () => {
    const sortName = this.state.original.sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.state.sortName ? 
      this.setState({sortName:!this.state.sortName, hogs: sortName})
      :
      this.setState({sortName:!this.state.sortName, hogs: sortName.reverse()})
  }

  sortWeight = () => {
    const sortWeight = this.state.original.sort((a,b) => (a.weight > b.weight) ? 1 : -1)
    this.state.sortWeight ? 
      this.setState({sortWeight:!this.state.sortWeight, hogs: sortWeight})
      :
      this.setState({sortWeight:!this.state.sortWeight, hogs: sortWeight.reverse()})
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <HogList hogs={this.state.hogs} isGreased={this.isGreased} sortName={this.sortName} sortWeight={this.sortWeight}/>

      </div>

    )
  }
}

export default App;
