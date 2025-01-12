import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import Product from './models/products.js'

dotenv.config();

const app = express();


app.use(express.json()) // This allows us to accept JSON data in the req.body
// Serves as the middleware before the client hits API and gets response from the server.

app.post("/api/products", async (req, res) => {
    const product = req.body; // User sends this data

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json( { success: false, message: "Please provide all required fields"})
    }

    const newProduct = new Product(product)
    try {
        await newProduct.save()
        res.status(201).json ({ success: true, data: newProduct })
    } catch (error) {
        console.error("Error in creating the product:", error.message)
        res.status(500).json({ success: false, message: "Server Error" })
    }
});



// Testing using Postman...

app.listen(3000, () => {
    connectDB()
    console.log('Server is running on http://localhost:3000');
});
