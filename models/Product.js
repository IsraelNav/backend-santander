const { Schema, model } = require('mongoose');

const ProductSchemna = new Schema({
    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    mail: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('Product', ProductSchemna, 'products');