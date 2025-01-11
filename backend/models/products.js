import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    }   
}, {
    timestamps: true // createdAt, updatedAT fields
});

const Product = mongoose.model('Product', productSchema);
// Mongoose will likely convert this to proudcts, also you can think of each item as individual
// Schema gives a form of abstraction for data pipeline

export default Product;