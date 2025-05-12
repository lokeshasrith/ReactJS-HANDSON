// Removed unused React import

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