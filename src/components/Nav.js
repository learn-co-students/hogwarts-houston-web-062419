import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {

	return (
		<div className="navWrapper">
			<br/>
			<span className="headerText">Hogwarts</span>
			<br/><br/>
			<div className="ui buttons">
				<div >
					<button className="ui teal basic button" onClick = {props.handleFilter}> {props.state.filtered? "Unfilter Greased":"Filter Greased"}</button>
				</div>
				<div >
					<button className="ui teal basic button" onClick = {props.handleNameSort}> {props.state.sortedNames?"Undo Name Sorting":"Sort by Name"}</button>
				</div>
				<div >
					<button className="ui teal basic button" onClick = {props.handleWeightSort}> {props.state.sortedWeight?"Undo Weight Sorting":"Sort by Weight"}</button>
				</div>
				<div>
					<button className="ui teal basic button" onClick = {props.handleShowAll}> "Show all"</button>
				</div>
			</div>
		</div>
	)
}

export default Nav
