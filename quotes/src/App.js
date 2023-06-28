// import logo from './logo.svg';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  let quoteData;

  let newColors = [
    'blue',
    'red',
    'orange',
    'yellow',
    'brown',
    'black'
  ];

  let currentQuote = '',
  currentAuthor = '';

  function getQuotes() {
    return fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(jsonQuotes => {
        if (typeof jsonQuotes === 'string') {
          quoteData = JSON.parse(jsonQuotes);
          console.log('quoteData');
          console.log(quoteData);
        }
      });
  }

  function getRandomQuote() {
    return quoteData.quotes[Math.floor(Math.random() * quoteData.quotes.length)];
  }

  function getQuote() {
    let randomQuote = getRandomQuote();

    currentQuote = randomQuote.quote;
    currentAuthor = randomQuote.author;

  }

  return (
    <>
    <div id="wrapper">
      <div id="quote-box">
      <div className="quote-text">
      <FontAwesomeIcon icon={faQuoteLeft} />
      <span id="text">hi</span>
      <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      <div className="quote-author"></div>
        <div className="buttons"></div>
      </div>
    </div>
    </>
  );
}

export default App;
