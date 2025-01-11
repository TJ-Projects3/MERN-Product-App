import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
    const product = req.body; // user sends this data

    if (!product.name || !product.price || !product.image) {
        return res.send(400).json( { success: false, message: "Please provide all required fields"})
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
