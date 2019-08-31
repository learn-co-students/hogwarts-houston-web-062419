import React from 'react'
import HogData from './HogData'
let images = require.context(`../hog-imgs`);

class HogTile extends React.Component{


    constructor(){
        super()
        this.state={
            showData: false
        }
    }

   
    toggle() {
        this.setState({
            showData: !this.state.showData
        })
    }
    

    render(){


        function pigName(name){
            name = name.replace(/\s+/g, '_').toLowerCase();
            return name
        }

        function showDetails(props){
            <HogData />
        }

        
        return(


            <div className='ui eight wide column' key={this.props.name}>
                <h2>{this.props.name}</h2>
                <img src= {images(`./${pigName(this.props.name)}.jpg`)} alt={this.props.name} onClick={this.props.showDetails}/>
                <HogData />
                <br></br>
                <br></br>
            </div>
        )
    }
}






export default HogTile


/* <div class="ui active button">
  <i class="user icon"></i>
  Ungreased
</div>

<div class="ui disabled button">
  <i class="user icon"></i>
  Greased
</div> */