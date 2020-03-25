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
    url: '/all-quote',
  })
  .then((response) => {
    console.log(response);
    allQuotes = reponse;
  }) // handles a successful response
  .catch((err) => {
    console.log(err);
  }); // catch handles errors
}

function render() {
  // appending my list to the DOM
}

console.log('HEY URSUS');