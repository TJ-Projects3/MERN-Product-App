import axios from "axios";
import { create } from "zustand";

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "Please fill in all fields"}
        }
        try {
            const response = await axios.post("/api/products", newProduct, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            const data = await response.data;
            set((state) => ({products:[...state.products, data.data]}))
            return {success: true, message: "Product created successfully"}
        } catch(error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Error creating product" };
        }
        }
}))