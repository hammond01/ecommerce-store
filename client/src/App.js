import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/ProductsAndCart/Product';
import HomeCategory from './Pages/Category/HomeCategory';
import Cart from './Pages/ProductsAndCart/Cart';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<HomeCategory category="mens" />} />
          <Route path='/women' element={<HomeCategory category="women" />} />
          <Route path='/kids' element={<HomeCategory category="kids" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':/productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
