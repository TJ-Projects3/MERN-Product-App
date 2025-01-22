import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()) // This allows us to accept JSON data in the req.body
// Serves as the middleware before the client hits API and gets response from the server.

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server is running on http://localhost:'+ PORT);
});
