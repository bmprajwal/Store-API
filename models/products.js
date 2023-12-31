const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'product price must be provided']
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    featured: {
        type: Boolean,
        default: false
    }
    ,
    company: {
        type: String,
        enum: {
            values: ['liddy', 'ikea', 'marcos', 'caressa'],
            message: '{VALUE} is not supported'
        }
    }
})

module.exports = mongoose.model('Product', productSchema)