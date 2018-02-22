import React, { Component } from 'react';
import SelectableList from "material-ui/List";
import ListItemText from "material-ui/List/ListItem";

class Todolist extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  createListItems(entry){
    return (
      <ListItemText 
        key = {entry.key} 
        children = {entry.text} 
      />
    );
  }

  render() {
    var toDoEntries = this.props.entries;
    var allListItems = toDoEntries.map(this.createListItems);
    console.log(allListItems)
    return (
        <SelectableList className = "To-do-list" children = {allListItems} />
    )
  }

}

export default Todolist;
