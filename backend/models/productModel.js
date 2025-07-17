const mongoose = require('mongoose');


const productSchema =new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    rating: String,
    images : [
        {
            image: String
        }
    ],
    category: String,
    seller: String,
    stock: Number,
    numofReviews: String,
    createdAt: Date
})

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;