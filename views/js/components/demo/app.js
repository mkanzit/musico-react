import React, { Component } from 'react';
import Navigation from './navigation';


class App extends Component {
	render() {
		return(
			<div className="content">
				<Navigation />
				{ this.props.children } 
		</div>
		)
	}
}


export default App;