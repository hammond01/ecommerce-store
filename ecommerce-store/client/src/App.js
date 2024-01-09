import './App.css';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Pages/Products/Product';
import HomeCategory from './Pages/Category/HomeCategory';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import banner_mens from './Asset/Client/banner_mens.png';
import banner_women from './Asset/Client/banner_women.png';
import banner_kids from './Asset/Client/banner_kids.png';
import Admin from './Pages/Admin/Admin';
import ProductAdmin from './Pages/Admin/ProductAdmin';
function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/mens"
						element={<HomeCategory banner={banner_mens} category="men" />}
					/>
					<Route
						path="/women"
						element={<HomeCategory banner={banner_women} category="women" />}
					/>
					<Route
						path="/kids"
						element={<HomeCategory banner={banner_kids} category="kid" />}
					/>
					<Route path="/product" element={<Product />}>
						<Route path=":productID" element={<Product />} />
					</Route>
					<Route path="/cart" element={<Cart />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />

					<Route path="/admin" element={<Admin />} />
					<Route path="/admin/addProduct" element={<ProductAdmin />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
