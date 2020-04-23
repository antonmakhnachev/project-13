const mongoose = require('mongoose');
//const schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlenght: 2,
        maxlenght: 30
    },
    about: {
        type: String,
        required: true,
        minlenght: 2,
        maxlenght: 30
    },
    avatar: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('user', userSchema);