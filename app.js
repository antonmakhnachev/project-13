const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();
//const path = require('path');

const bodyParser = require('body-parser');

const routerUsers = require('./routes/users.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//const routerCards = require('./routes/cards.js');

mongoose.connect('mongodb://localhost:27017/mestodb', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});




//app.use(express.static(path.join(__dirname, 'public')));



app.use('/users', routerUsers);
//app.use('/cards', routerCards);

app.use((req, res, next) => {
  req.user = {
      _id: '5ea0c236982cee3010079d84' // вставьте сюда _id созданного в предыдущем пункте пользователя
  };

  next();
});

app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`Port ${PORT}`);
});
