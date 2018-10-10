import React, { Component } from "react";
import "../css/App.css";
import QuoteBox from './QuoteBox.js';
import APIAttribution from './APIAttribution.js';

class App extends Component {
  render(){
    return(
      <div className="App">
        <QuoteBox />
        <APIAttribution />
      </div>
    );
  }
}

export default App;
