import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import ProductsPage from "./components/ProductsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <nav style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/">About</Link> | <Link to="/products">Products</Link>
        </nav>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
