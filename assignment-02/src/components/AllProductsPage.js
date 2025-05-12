import { Component } from "react";
import ProductsList from "./ProductsList";
import productsData from "../data/products.json";

class AllProductsPage extends Component {
    constructor(props) {
        super(props);
        this.state = { products: productsData };
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

export default AllProductsPage;