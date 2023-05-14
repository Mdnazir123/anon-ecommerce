import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../src/Components/Navbar';
import ProductCart from '../src/Components/ProductCart';
import CartPage from './Components/CartPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProductCart />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
