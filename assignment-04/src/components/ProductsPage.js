import React, { useContext } from "react";
import ProductsList from "./ProductsList";
import { ProductsContext } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductsPage() {
    const { products } = useContext(ProductsContext);

    return (
        <div className="container text-center mt-5">
            <h1>Product List</h1>
            <ProductsList products={products} />
            <Link to="/add-product" className="btn btn-primary mt-3">Add Product</Link>
        </div>
    );
}

export default ProductsPage;