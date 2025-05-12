import React from "react";
import Product from "./Product";

function ProductsList({ products }) {
    return (
        <table className="table table-bordered mt-3">
            <thead className="table-dark">
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductsList;