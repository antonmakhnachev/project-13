const User = require('../models/user');

module.exports.createUser = (req, res) => {
    const { name, about, avatar } = req.body;

    User.create({ name, about, avatar })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ massege: 'Произошла ошибка' }))
};

module.exports.getUsers = (req, res) => {
    User.find({})
        .then(user => res.send({ data: user }))
        .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }))
};

module.exports.getUser = (req,res) => {
    const userId = req.params.userId;

    User.findById(userId)
        .then(user => res.send({ data: user }))
        .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }))
};

module.exports.deleteUser = (req, res) => {
    const userId = req.params.userId;

    User.findByIdAndRemove(userId)
        .then(user => res.send({ data: user }))
        .catch(() => res.status(500).send({ massege: 'Произошла ошибка' }))
};




