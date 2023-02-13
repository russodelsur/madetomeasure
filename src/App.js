import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Header';
import ProductCard from './components/Product';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<ProductCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

