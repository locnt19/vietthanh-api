const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    name: {
        type: String
    },
    birthday: {
        type: String,
        default: null
    },
    address: {
        type: String,
        default: null
    },
    phoneNumber: {
        type: String,
        default: null
    },
    rank: {
        type: String,
        default: null
    },
    productListPurchased: {
        type: [String],
        default: null
    }

    
},{
    collection: 'users'
});

module.exports = mongoose.model('User', User);