import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    const addProduct = async (newProduct) => {
        await axios.post("http://localhost:3001/products", newProduct);
        setProducts((prev) => [...prev, newProduct]);
    };

    const deleteProduct = async (id) => {
        await axios.delete(`http://localhost:3001/products/${id}`);
        setProducts((prev) => prev.filter((product) => product.id !== id));
    };

    return (
        <ProductsContext.Provider value={{ products, addProduct, deleteProduct }}>
            {children}
        </ProductsContext.Provider>
    );
}