import React from 'react'

function HogData(){ 
    
    return(
        <div>
            <p>Specialty: {this.props.specialty}</p>
            <p>Weight: {this.props.weight}</p>
            <p>Highest Medal Won: {this.props['highest medal achieved']}</p>
            <p>Greased? {this.props.greased}</p> 
        </div>
    )
    
}

export default HogData