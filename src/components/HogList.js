import React, { Component } from 'react';
import HogCard from './HogCard.js'

export default class HogList extends Component {



    render(){
        let main = {
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fill, minmax(200px, 1fr))',
            'grid-gap': '20px',
            'align-items': 'start'
        }
        let margin = {
            'margin': '5px'
        }

        return(
            <div>
            <button onClick={this.props.isGreased} className="btn btn-success" style={margin}>Filter by Greased Hogs</button>
            <button onClick={this.props.sortName} className="btn btn-success" style={margin}>Sort By Name</button>
            <button onClick={this.props.sortWeight} className="btn btn-success" style={margin}>Sort By Weight</button>
            <br/><br/>
                <div className=" col-sm" style={main} >
                  {this.props.hogs.map(hog => <HogCard hog={hog} />)}

                </div>
            </div>
        )
    }
}