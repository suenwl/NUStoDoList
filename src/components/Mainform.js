import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";
import Todolist from "./Todolist.js";
import teal from "material-ui/colors/teal";

        
class Mainform extends Component {

	constructor(){
		super();
		this.state = {
			items:[],
			toDoField:"",
			selectedModule:"",
		}
		this.addItem = this.addItem.bind(this); //A function's context (ie. "this") may change when called from different locations. To ensure that we always refer to the Mainform component, we have to bind the function to it   
		this.handleChange = this.handleChange.bind(this);
		//this.changeSelectedModule = this.changeSelectedModule.bind(this);
	}

	addItem(e){ //Handles new items being added to the todo list - we obtain the previous state and concatenate our new item onto it
		if (this.state.toDoField !== ""){ //Check if we're adding an empty to-do, and refuse to add if that's the case
			
			var newItem = {
				key: Date.now(),
				text: this.state.toDoField,
				module: this.state.selectedModule
			}

			this.setState(prevState => ({ //Arrow function - we take in the prevState and do something with it, returning a new state var 
				items: prevState.items.concat(newItem),
				toDoField: ""
			}));
		}
		e.preventDefault(); //Prevents the page from refreshing
	}

	handleChange(e){ //Handles changes to the to-do text field
		this.setState({toDoField:e.target.value});
	}

	changeSelectedModule(modulecode,e){
		this.setState({selectedModule:modulecode});
		//console.log(this.state.selectedModule)
	}

	componentDidUpdate(){
		//console.log(this.state.items)
		//console.log(this.state.selectedModule)
	}

	renderModuleButton(modulecode,selectedModule){
		var buttonColor = teal[200];
		if (modulecode === selectedModule){
			buttonColor= teal[700]
		}

		return (
			<Button
				variant = "raised"
				className = "module-button"
				children = {modulecode}
				style = {{
					backgroundColor: buttonColor,
					color: "#FFFFFF"
				}}
				onClick = {(e) => this.changeSelectedModule(modulecode,e)}
			/>
		)
	}

	render() {
    	return (
	        <div className="Mainform">
	          
				{this.renderModuleButton("BT3103",this.state.selectedModule)}
				{this.renderModuleButton("IS2101",this.state.selectedModule)}
				{this.renderModuleButton("ST3131",this.state.selectedModule)}
				{this.renderModuleButton("UTW2001R",this.state.selectedModule)}
				{this.renderModuleButton("SPH2101",this.state.selectedModule)}


	        	<form onSubmit = {this.addItem}> {/*Calling the addItem function when the form is submitted*/}
		        	<TextField 
		          		className = "full-width-textfield"
		          		label="Enter a to-do"
		          		margin = "normal"
		          		onChange = {this.handleChange} //Call the handleChange function whenever there is a change in the textfield, so that the state is updated
		          		value = {this.state.toDoField}
		          	/>

		          	<br/>
		          	
		          	<Button
		          		variant = "raised"
		          		className = "submit-button"
		          		children="Submit"
		          		type = "Submit"
		          		style = {{
		          			backgroundColor: teal[300],
		          			color: "#FFFFFF"
		          		}}
		          	/>

	          	</form>

				<Todolist entries = {this.state.items} />

	        </div>
	    );
	}
}

export default Mainform;