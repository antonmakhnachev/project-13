const Card = require('../models/card');

module.exports.createCard = (req, res) => {
    const { name, link } = req.body;
    const owner = req.user._id;

    Card.create({ name, link, owner })
        .then((card) => res.send({ data: card }))
        .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }))
};

module.exports.getCards = (req, res) => {
    Card.find({})
        .then((card) => res.send({ data: card }))
        .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }))
};

module.exports.deleteCard = (req, res) => {
    const cardId = req.params.cardId;

    Card.findByIdAndRemove(cardId)
        .then((card) => res.send({ data: card }))
        .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }))
}