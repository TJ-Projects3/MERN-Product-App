import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import Product from './models/products.js';
import mongoose from 'mongoose';

dotenv.config();

const app = express();


app.use(express.json()) // This allows us to accept JSON data in the req.body
// Serves as the middleware before the client hits API and gets response from the server.

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ success: true, data: products})
    } catch(error) {
        console.log("Error when fetching products:" , error.message) // Putting console logs for debugging purposes.
        res.status(404).json({ success: true, message: "Could not retrieve all products"})
    }
})

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

app.put("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "No product with that id" })
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.log("Error in updating product:", error.message);
        res.status(500).json({ success: false, message: "Server Error" })
    }
});

app.delete("/api/products/:id", async (req, res) => { // :id is dynamic, it can be any value the user will pass.
    const {id} = req.params
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({ success: true, message: "Product deleted successfully"})
    } catch (error) {
        console.log("Error in deleting product:" , error.message)
        res.status(404).json({ success: false, message: "Product not found"})
    }
})



// Testing using Postman...

app.listen(3000, () => {
    connectDB()
    console.log('Server is running on http://localhost:3000');
});
