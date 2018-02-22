import React, { Component } from 'react';

class Firstcomponent extends Component {
	constructor(props){
		super(props);
		this.state = {
			name: "",
			propNumber: 0
		}
	}

	componentDidMount(){ //Can only set state on a mounted/mounting component
		var newName = this.props.name;
		var propNumber = this.props.propNumber;
		this.setState(prevState => ({
			name: newName,
			propNumber: propNumber
		}));


	}

	render() {

		return (
			<div>
				<h3> The Firstcomponent is working</h3>
				This prop's name is {this.state.name} <br/>
				This prop's number is {this.state.propNumber}
			</div>
		);
	}
}

export default Firstcomponent;