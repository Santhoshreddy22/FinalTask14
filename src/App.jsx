import {
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import BottomBar from "./components/BottomBar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";

function App() {

  return (
    <div className="app">

      <Navbar />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          >

            <Route
              path="category/:categoryName"
              element={<Products />}
            />

          </Route>

          <Route
            path="/products/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/categories"
            element={<Categories />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/profile"
            element={<Profile />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="*"
            element={
              <div className="not-found">
                <h1>404</h1>
                <p>Page Not Found</p>
              </div>
            }
          />

        </Routes>

      </main>

      <BottomBar />

    </div>
  );
}

export default App;