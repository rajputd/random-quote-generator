import React, { Component } from "react";
import "../css/App.css";
import QuoteBox from './QuoteBox.js'

class App extends Component {
  render(){
    return(
      <div className="App">
        <QuoteBox />
      </div>
    );
  }
}

export default App;
