import axios from 'axios';
import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please fill in all fields" };
        }
        try {
            const response = await axios.post("/api/products", newProduct, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = response.data;
            set((state) => ({ products: [...state.products, data.data] }));
            return { success: true, message: "Product created successfully" };
        } catch (error) {
            console.error("Error creating product:", error);
            return { success: false, message: "Error creating product" };
        }
    },
    fetchProducts: async () => {
        try {
            const response = await axios.get("/api/products");
            const data = response.data;
            set({ products: data.data });
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },
    deleteProduct: async (pid) => {
        if (!pid) {
            return { success: false, message: "Product ID not found" };
        }
        try {
            const response = await axios.delete(`/api/products/${pid}`);
            const data = response.data;
            if (!data.success) {
                return { success: false, message: data.message };
            } else {
                set((state) => ({
                    products: state.products.filter((product) => product._id !== pid)
                }));
                return { success: true, message: "Product successfully deleted" };
            }
        } catch (error) {
            console.error("Error deleting product:", error);
            return { success: false, message: "Error deleting the product" };
        }
    }
}));