const routerCards = require('express').Router();
//const path = require('path');
//const fsPromises = require('fs').promises;

const { createCard, getCards, deleteCard } = require('../controllers/cards');


routerCards.post('/', createCard);
routerCards.get('/', getCards);
routerCards.delete('/:cardId', deleteCard);



// routerCards.get('/', (req, res) => {
//   fsPromises.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' })
//     .then((data) => {
//       res.send(JSON.parse(data));
//     })

//     .catch((err) => {
//       res.status(404).send({ message: err });
//     });
// });

module.exports = routerCards;
