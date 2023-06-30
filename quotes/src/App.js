// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import styles from './RandomQuoteMachine.module.css';


function App() {
  // let quotesData;

  const [colors] = useState([
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ]);

const [quotesData, setQuotesData] = useState(null);
const [currentQuote, setCurrentQuote] = useState('');
const [currentAuthor, setCurrentAuthor] = useState('');

  // let currentQuote = '',
  // currentAuthor = '';

  // function getQuotes() {
  //      fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
  //     .then(response => response.json())
  //     .then(quotesData => {
  //         console.log(quotesData);
        
  //     });
  // }
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(jsonQuotes => {
        setQuotesData(jsonQuotes);
      });
  }, []);

  // function getRandomQuote() {
  //   if (quotesData && quotesData.quotes.length > 0) {
  //     return quotesData.quotes[Math.floor(Math.random() * quotesData.quotes.length)];
  //   }
  //   return null;
  // }

  function getRandomQuote() {
    if (quotesData && quotesData.quotes.length > 0) {
      return quotesData.quotes[
        Math.floor(Math.random() * quotesData.quotes.length)
      ];
    }
    return null;
  }

  function getQuote() {
    const randomQuote = getRandomQuote();
  
    if (randomQuote) {
      setCurrentQuote(randomQuote.quote);
      setCurrentAuthor(randomQuote.author);
  
      const colorIndex = Math.floor(Math.random() * colors.length);
      const color = colors[colorIndex];
  
      document.documentElement.style.setProperty('--background-color', color);
      document.documentElement.style.setProperty('--text-color', color);
      document.body.style.backgroundColor = color;
    }
  }


  return (
    <>
    <div id="wrapper">
      <div id="quote-box">
      <div className="quote-text">
      <FontAwesomeIcon icon={faQuoteLeft} />
      <span id="text">{currentQuote}</span>
      <FontAwesomeIcon icon={faQuoteRight} />
      </div>
      <div className="quote-author">{currentAuthor}</div>
        <div className="buttons">
        <button id="new-quote" onClick={getQuote} className={styles.button}>
        Get New Quote
      </button>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;
