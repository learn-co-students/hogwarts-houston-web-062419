import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigList from "./PigList"

class App extends Component {
	constructor(){
		super()

   		hogs.map(hog => hog.show = true)

		this.state = {
        	hogs: hogs,     	
        	filtered: false,
        	sortedNames: false,
        	sortedWeight: false
   		 };
	}

	handleFilter = () =>{
		this.setState({filtered: !this.state.filtered})
	}
	handleNameSort = () =>{
		this.setState({sortedNames: !this.state.sortedNames})
	}
	handleWeightSort = () =>{
		this.setState({sortedWeight: !this.state.sortedWeight})
	}
	handleShowAll = () =>{
		let all_hogs = this.state.hogs
		all_hogs.map(hog => hog.show = true )
		this.setState({hogs: all_hogs})
		console.log(this.state.hogs)
		
	}
	handleHide = (name) => {
		console.log("in Hide handke " + name)

		let all_hogs = this.state.hogs
		all_hogs.map(hog =>  (hog.name === name)? hog.show = false: hog.show = hog.show)
		this.setState({hogs: all_hogs})
		console.log(this.state.hogs)
	}

  render() {
  	
    return (
      <div className="App">
          <Nav state={this.state} handleShowAll={this.handleShowAll} handleFilter={this.handleFilter} 
          			handleNameSort={this.handleNameSort} handleWeightSort={this.handleWeightSort}/>
          <PigList state= {this.state} handleHide={this.handleHide} hogs = {this.state.hogs}/>
      </div>
    )
  }
}

export default App;
