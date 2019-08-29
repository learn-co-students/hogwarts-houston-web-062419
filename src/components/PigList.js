import React, { Component } from 'react';
import PigCard from "./PigCard"


export default class PigList extends Component {
	constructor(props){
		super(props)
	}


  render() {
  	let hogs = this.props.hogs

  	if (this.props.state.sortedNames)
  		hogs = hogs.sort((a, b) => (a.name > b.name) ? 1 : -1)

  	if (this.props.state.sortedWeight)
  		hogs = hogs.sort((a, b) => (a.weight > b.weight) ? 1 : -1)

  	hogs = hogs.filter(hog => hog.show == true)

    return (
      <div className="PigList" className= "ui grid container">
         {hogs.map(hog => this.props.state.filtered? 
         				(hog.greased?  <PigCard key={hog.name} hog = {hog} handleHide={this.props.handleHide}/>:"")
         				: <PigCard key={hog.name} hog = {hog} handleHide={this.props.handleHide}/>)}
      </div>
    )
  }
}

