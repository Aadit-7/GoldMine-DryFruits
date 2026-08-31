import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import Products from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/category/:category" element={<Products />} />

      <Route path="/wishlist" element={<Wishlist />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
