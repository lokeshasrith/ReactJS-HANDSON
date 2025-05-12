import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsContext";
import About from "./components/About";
import ProductsPage from "./components/ProductsPage";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Router>
          <nav>
            <Link to="/">About</Link> | <Link to="/products">Products</Link>
          </nav>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/add-product" element={<AddProduct />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </div>
  );
}

export default App;
