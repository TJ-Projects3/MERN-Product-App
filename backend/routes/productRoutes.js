import express from "express";
import mongoose from "mongoose";
import Product from "../models/products.js";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productControllers.js";

const router = express.Router();


router.get("/", getProducts)

router.post("/", createProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct)

export default router;