const routerUsers = require('express').Router();
const fsPromises = require('fs').promises;
const path = require('path');
const User = require('../models/user'); 
const { createUser, getUsers, deleteUser, getUser } = require('../controllers/users');

routerUsers.post('/', createUser);
routerUsers.get('/:userId', getUser);
routerUsers.get('/', getUsers);
routerUsers.delete('/:id', deleteUser);




// routerUsers.get('/', (req, res) => {
//   fsPromises.readFile(path.join(__dirname, '../data/users.json'))
//     .then((data) => {
//       res.send(JSON.parse(data));
//     })

//     .catch((err) => {
//       res.status(404).send({ massege: err });
//     });
// });

// routerUsers.get('/:id', (req, res) => {
//   fsPromises.readFile(path.join(__dirname, '../data/users.json'))
//     .then((data) => {
//       const user = JSON.parse(data).find(user => req.params.id === user._id);
//       if (user) {
//         res.send(user);
//       } else {
//         res.status(404).send({ message: 'Нет пользователя с таким id' });
//       };
//     })

//     .catch((err) => {
//       res.status(404).send({ massege: err });
//     });
// });

module.exports = routerUsers;
