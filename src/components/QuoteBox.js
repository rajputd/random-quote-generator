import React, { Component } from "react";
import '../css/QuoteBox.css';

export default class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: ''
    }

    this.getNewQuote();

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    const url = "https://talaikis.com/api/quotes/random/";
    fetch(url)
      .then((response) => { return response.json(); })
      .then((data) => {
        this.setState({quote: data.quote, author: data.author});
      });
  }

  render(){
    return(
      <div id="quote-box">
        <p id="text" className="center-text">{this.state.quote}</p>
        <p id="author" className="center-text">-{this.state.author}</p>
        <div>
          <button id="new-quote" onClick={this.getNewQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}
