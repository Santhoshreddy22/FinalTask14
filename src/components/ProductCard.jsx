import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-content">

        <span className="product-category">
          {product.category}
        </span>

        <h3>
          {product.title.length > 45
            ? product.title.slice(0, 45) + "..."
            : product.title}
        </h3>

        <div className="rating">
          ⭐ {product.rating?.rate || "4.5"}
          <span>
            ({product.rating?.count || 0})
          </span>
        </div>

        <div className="product-price">
          ${product.price.toFixed(2)}
        </div>

        <button
          className="add-cart-btn"
          onClick={() => addToCart(product)}
        >
          🛒 Add to Cart
        </button>

        <Link
          to={`/products/${product.id}`}
          className="details-btn"
        >
          View Details →
        </Link>

      </div>
    </div>
  );
}

export default ProductCard;