// React import removed as it is not directly used

function Product({ product }) {
    return (
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>₹{product.price}</td>
        </tr>
    );
}

export default Product;