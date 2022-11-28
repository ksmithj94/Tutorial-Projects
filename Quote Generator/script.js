//https://jacintodesign.github.io/quotes-api/data/quotes.json

//https://type.fit/api/quotes

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
  console.log(quote)

  if(!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  if(quote.text.length > 50) {
    quoteText.classList.add('long-quote')
  } else {
    quoteText.classList.remove('long-quote')
  }
  quoteText.textContent = quote.text;

};

async function getQuotes() {
  const apiUrl = 'https://type.fit/api/quotes';
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    console.log(apiQuotes);
    newQuote();
  } catch (error) {
    // catch error here
  }
};

//on Load
getQuotes();