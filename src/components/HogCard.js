import React, { Component } from 'react';

export default class HogCard extends Component {

    constructor() {
        super(),
        this.state = {
            clicked:false
        }
    }

    click = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render(){
        let greased = this.props.hog.greased.toString()
        let link = this.props.hog.name.split(" ").join("_").toLowerCase()
        let reqlink = require(`../hog-imgs/${link}.jpg`)
        let maindiv = {
            'width': '18rem'
        }

        return(
            
            <div onClick={this.click} className="card" style={maindiv}>
                <img src={reqlink} className="card-img-top"/>

                <h3 className="card-title">{this.props.hog.name}</h3>
                {!this.state.clicked ? "" : <div className="card-body"><h4>Weight: {this.props.hog.weight}<br/>Specialty: {this.props.hog.specialty}<br/>Highest Medal: {this.props.hog["highest medal achieved"]}<br/>Greased: {greased}</h4><br/><br/></div>}

            </div>
            
        )
    }
}


