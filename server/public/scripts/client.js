$(document).ready(init);

let allQuotes = [];
let randoQuote = {};
// let randoQuote = ''; // what the data typ is
// let randoQuote = 0;

function init() {
  console.log('DOM is totes ready!!!');
  $('.js-btn-rando-quote').on('click', clickGetQuote);
  $('.js-new-quote-form').on('submit', submitQuote);

  getQuotes();
}

//
// EVENT HANDLERS
// ----------

function submitQuote(event) {
  event.preventDefault();
  const newQuote = {
    quote: $('.js-input-quote').val(),
    author: $('.js-input-author').val(),
  };

  console.log(newQuote);
  // passing newQuote to saveQuote function
  saveQuote(newQuote);
}

function clickGetQuote(event) {
  console.log('CLICKED!!!');
  // get random quote from server
  getRandomQuote();
}

//
// API INTERACTIONS
// ----------

function saveQuote(quoteData) {
  $.ajax({// .ajax() returns a Promise
    method: 'POST',
    url: '/quote',
    data: quoteData
  })
  .then((response) => {
    console.log(response);
    getQuotes();
  }) // handles a successful response
  .catch((err) => {
    console.log(err);
  }); // catch handles errors
}

function getRandomQuote() {
  $.ajax({// .ajax() returns a Promise
    method: 'GET',
    url: '/quote',
  })
  .then((response) => {
    console.log(response);
    randoQuote = response;

    render();
  }) // handles a successful response
  .catch((err) => {
    console.log(err);
  }); // catch handles errors
}

function getQuotes() {
  // GET my quotes from the server
  $.ajax({// .ajax() returns a Promise
    method: 'GET',
    url: '/all-quotes',
  })
  .then((response) => {
    console.log(response);
    allQuotes = response;

    render();
  }) // handles a successful response
  .catch((err) => {
    console.log(err);
  }); // catch handles errors
}

//
// RENDERING TO DOM
// ----------

function render() {
  // appending my list to the DOM

  $('.js-quotes').empty();
  for (let i = 0; i < allQuotes.length; i++) {
    const quoteObject = allQuotes[i];
    // console.log(quoteObject);

    $('.js-quotes').append(`
      <div class="stackedQuote">
        <p class="stackedQuote-quote">${quoteObject.quote}</p>
        <em class="stackedQuote-author">by - ${quoteObject.author}</em>
      </div>
    `);
  }

  if (randoQuote.quote != null && randoQuote.author != null) {
    $('.js-rando-quote').empty();
    $('.js-rando-quote').append(`
        <div class="stackedQuote">
          <p class="stackedQuote-quote">${randoQuote.quote}</p>
          <em class="stackedQuote-author">by - ${randoQuote.author}</em>
        </div>
    `);
  }
}

console.log('HEY URSUS');