console.log('I am a Server');
const express = require('express');
const bodyParser = require('body-parser');
const quotes = require('./modules/quotes');
const randomNumber = require('./modules/randomNumber');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

// SAVING DATA
app.post('/quote', (req, res) => {
  console.log('req:', req);
  const newQuote = req.body;
  // {
  //   quote: '',
  //   author: '',
  // }

  quotes.push(newQuote);

  res.sendStatus(201);
});

//
// KICK OFF / RUN, SERVER
// --------------------

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
})
