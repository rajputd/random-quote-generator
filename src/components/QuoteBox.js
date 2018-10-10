import React, { Component } from "react";

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
      <div>
        <p>{this.state.quote}</p>
        <p>{this.state.author}</p>
        <button onClick={this.getNewQuote}>New Quote</button>
      </div>
    );
  }
}
