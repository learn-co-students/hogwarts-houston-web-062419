import React from 'react'
import HogTile from './HogTile'


class HogList extends React.Component{

    render() {
        return(
            <div className='ui grid container'>
                {this.props.hogs.map((hog) =>{
                    return <HogTile {...hog} key={hog.name}/>
                })}
                
            </div>
        )
    }
}


export default HogList