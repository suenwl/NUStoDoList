import React, { Component } from 'react';
import './App.css';
import Mainform from "./components/Mainform.js";
import AppBar from "material-ui/AppBar";

class App extends Component {

  constructor(){
    super();
    this.state = {
    }
  }


  render() {

    return (

      <div className="App">
        <div>
          <AppBar className = "App-bar"> A to do list for NUS modules </AppBar>
        </div>

        <Mainform/>

      </div>
    );
  }

}

export default App;
