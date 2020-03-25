$(document).ready(init);

let allQuotes = [];

function init() {
  console.log('DOM is totes ready!!!');
  
  getQuotes();
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

function render() {
  // appending my list to the DOM

  $('.js-quotes').empty();
  for (let i = 0; i < allQuotes.length; i++) {
    const quoteObject = allQuotes[i];
    console.log(quoteObject);

    $('.js-quotes').append(`
      <div class="stackedQuote">
        <p class="stackedQuote-quote">${quoteObject.quote}</p>
        <em class="stackedQuote-author">by - ${quoteObject.author}</em>
      </div>
    `);
  }
}

console.log('HEY URSUS');