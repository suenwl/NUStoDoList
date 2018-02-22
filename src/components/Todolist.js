import React, { Component } from 'react';
import List, {ListItem,ListItemText} from "material-ui/List";

class Todolist extends Component {

  constructor(props){
    super(props);
    this.createListItems = this.createListItems.bind(this);
  }

  deleteEntry(key){
    this.props.deleteEntryFunction(key);
  }

  createListItems(entry){
    return (
      <ListItem key = {entry.key} button onClick = { () => this.deleteEntry(entry.key) } >
        <ListItemText 
          key = {entry.key}
          primary = {entry.text} 
          secondary = {entry.module}
        />
      </ListItem>
    );
  }

  render() {
    var toDoEntries = this.props.entries;
    var allListItems = toDoEntries.map(this.createListItems);
    console.log(allListItems)
    return (
        <div className = "To-do-list">
          <List>
            {allListItems}
          </List>
        </div>
    )
  }

}

export default Todolist;
