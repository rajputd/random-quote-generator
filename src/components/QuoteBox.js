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
    this.changeColorTheme = this.changeColorTheme.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getNewQuote() {
    const url = "https://talaikis.com/api/quotes/random/";
    fetch(url)
      .then((response) => { return response.json(); })
      .then((data) => {
        this.setState({quote: data.quote, author: data.author});
      });
  }

  changeColorTheme() {
    const colors = ["Blue", "BlueViolet", "Chocolate", "Crimson", "DarkGolderRod",
                    "DarkGreen", "DarkOrchid", "DeepPink", "Fuchsia",
                    "OrangeRed", "Olive"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
    document.body.style.color = randomColor;
  }

  handleClick() {
    this.getNewQuote();
    this.changeColorTheme();
  }

  render(){
    let tweetLink = "https://twitter.com/intent/tweet?hastags=quotes&related=freecodecamp&text=" + encodeURI(this.state.quote + " -" + this.state.author);
    return(
      <div id="quote-box">
        <p id="text" className="center-text">{this.state.quote}</p>
        <p id="author" className="center-text">-{this.state.author}</p>
        <div id="quote-box-btns">
          <div id="tweet-quote">
            <a href={tweetLink} target="_blank">
              <button className="btn">
                <i className="fab fa-twitter"></i>
              </button>
            </a>
          </div>
          <button id="new-quote" className="btn" onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    );
  }
}
