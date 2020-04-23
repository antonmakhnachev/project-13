const mongoose = reqired('mongoose');
//const schema = mongoose.Schema;

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        reqired: true,
        minlenght: 2,
        maxlength: 30
    },
    link: {
        type: String,
        reqired: true
    },
    owner: {
        type: schema.Types.ObjectId,
        ref: 'user',
        reqired: true
    },
    likes: [{
        type: schema.Types.ObjectId,
        ref: 'user',
        default: []
    }],
    createAt: {
        type: Date,
        default: new Date()
    }

});

module.exports = mongoose.model('card', cardSchema);