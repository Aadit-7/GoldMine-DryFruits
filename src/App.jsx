import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Products from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

import AuthChoice from "./pages/auth/AuthChoice";
import UserLogin from "./pages/auth/UserLogin";
import UserRegister from "./pages/auth/UserRegister";
import AdminLogin from "./pages/auth/AdminLogin";
import AdminRegister from "./pages/auth/AdminRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/product/:productId" element={<ProductDetailsPage />} />

      <Route path="/category/:slug" element={<CategoryPage />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/auth" element={<AuthChoice />} />

      <Route path="/auth/user/login" element={<UserLogin />} />

      <Route path="/auth/user/register" element={<UserRegister />} />

      <Route path="/auth/admin/login" element={<AdminLogin />} />

      <Route path="/auth/admin/register" element={<AdminRegister />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
