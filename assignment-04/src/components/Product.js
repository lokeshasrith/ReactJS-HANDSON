import React, { useContext, useState } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ConfirmDialog from "./ConfirmDialog";

function Product({ product }) {
    const { deleteProduct } = useContext(ProductsContext);
    const [showDialog, setShowDialog] = useState(false);

    return (
        <>
            <tr>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>₹{product.price}</td>
                <td>
                    <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>Delete</button>
                    <button className="btn btn-info ms-2" onClick={() => setShowDialog(true)}>View Details</button>
                </td>
            </tr>
            {showDialog && (
                <ConfirmDialog
                    onConfirm={() => alert(`Viewing details for ${product.name}`)}
                    onCancel={() => setShowDialog(false)}
                />
            )}
        </>
    );
}

export default Product;