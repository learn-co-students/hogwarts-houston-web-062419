import React, { Component } from 'react';
import Cherub from "../hog-imgs/cherub.png"

export default class PigCard extends Component {

	constructor(props){

		super(props)
		this.state = {
			img_name: 'cherub',
			detailes: false
		}
	}
	
	handleClick = () =>{
		this.setState({detailes: !this.state.detailes})
	}

  render() {
  	const filename = this.props.hog.name.toLowerCase().split(' ').join("_")
  	let name = this.props.hog.name
  	const img = require(`../hog-imgs/${filename}.jpg`);
    return (
      <div className="PigCard" onClick= {this.handleClick}>
	      <div className="ui eight wide column">
         		{this.state.detailes?
					<div className="ui card">
						<br/> 
           				<br/>
						<h3 className="header">Highest medal achieved: {this.props.hog["highest medal achieved"]}</h3>  
						<h3 className="header">Weight: {this.props.hog.weight}</h3>
						<h3 className="header"> {this.props.hog.greased ? "Greased":"Not greased"}</h3>  
					   <div className="content">
					    <h3 className="header">Specialty: {this.props.hog.specialty}</h3>  
					    <button onClick={ ()=>this.props.handleHide(this.props.hog.name)}>
					    				Hide me!</button>
				  		</div>		 
					</div>
         			:<div className="ui card">


						 <div className="image">
						    <img src={img} />
						  </div>
						   <div className="content">
						    <a className="header">{this.props.hog.name}</a>  
					  		</div>		 
					</div>
				}
	      </div>
      </div>
    )
  }
}

