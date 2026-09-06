import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/">ShopSphere</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">
          Products
        </Link>

        <Link to="/categories">
          Categories
        </Link>

        <Link to="/wishlist">
          Wishlist
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        <Link to="/contact">
          Contact
        </Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">
            {totalItems}
          </span>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;