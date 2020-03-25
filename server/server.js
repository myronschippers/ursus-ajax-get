console.log('I am a Server');
const express = require('express');
const quotes = require('./modules/quotes');
const randomNumber = require('./modules/randomNumber');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static('server/public'));

// LOKING FOR
// GET
// /quote

//
// SERVER ROUTES
// --------------------

/**
 * Get a full list of quotes.
 */
app.get('/all-quotes', (req, res) => {
  res.send(quotes);
});

/**
 * Return one random quote from the list of quotes
 */
app.get('/quote', (req, res) => {
  const lastQuoteIndex = quotes.length - 1;
  const randomIndex = randomNumber(0, lastQuoteIndex);
  const randoQuote = quotes[randomIndex];

  res.send(randoQuote);
});

//
// KICK OFF / RUN, SERVER
// --------------------

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})
