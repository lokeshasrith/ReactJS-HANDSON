import React, { Component } from "react";
import ProductsList from "./ProductsList";

class ProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    componentDidMount() {
        fetch("http://localhost:3001/products")
            .then((response) => response.json())
            .then((data) => this.setState({ products: data }));
    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h1>Product List</h1>
                <ProductsList products={this.state.products} />
            </div>
        );
    }
}

export default ProductsPage;