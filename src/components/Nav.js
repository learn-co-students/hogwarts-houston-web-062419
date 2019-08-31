import piggy from '../porco.png'
import React from 'react'

const Nav = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.google.com/search?q=pigs&safe=off&rlz=1C5CHFA_enUS853US853&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjb4aLz7KjkAhVyhq0KHY6dCY8Q_AUIESgB&biw=1440&bih=789">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
		</div>
	)
}

export default Nav
