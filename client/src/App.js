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
import banner_mens from "./Components/Data/banner_mens.png";
import banner_women from "./Components/Data/banner_women.png";
import banner_kids from "./Components/Data/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter >
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mens' element={<HomeCategory banner={banner_mens} category="men" />} />
          <Route path='/women' element={<HomeCategory banner={banner_women} category="women" />} />
          <Route path='/kids' element={<HomeCategory banner={banner_kids} category="kid" />} />
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
