import { useEffect, useState } from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import axios from "axios";

import Loader from "../components/Loader";
import { useCart } from "../context/CartContext";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const { addToCart } =
    useCart();

  useEffect(() => {

    async function getProduct() {

      try {

        const response =
          await axios.get(
            `https://fakestoreapi.com/products/${id}`
          );

        setProduct(response.data);

      } catch (error) {

        console.error(
          "Product error:",
          error
        );

      } finally {

        setLoading(false);

      }
    }

    getProduct();

  }, [id]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return (
      <div className="empty-state">
        <h2>Product Not Found</h2>

        <Link
          to="/products"
          className="primary-btn"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <section className="details-page">

      <Link
        to="/products"
        className="back-link"
      >
        ← Back to Products
      </Link>

      <div className="details-container">

        <div className="details-image">
          <img
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className="details-content">

          <span className="product-category">
            {product.category}
          </span>

          <h1>
            {product.title}
          </h1>

          <div className="rating">
            ⭐ {product.rating?.rate}
            {" "}
            ({product.rating?.count} reviews)
          </div>

          <h2 className="details-price">
            ${product.price.toFixed(2)}
          </h2>

          <p className="description">
            {product.description}
          </p>

          <div className="details-actions">

            <button
              className="primary-btn"
              onClick={() =>
                addToCart(product)
              }
            >
              🛒 Add to Cart
            </button>

            <Link
              to="/cart"
              className="secondary-btn"
            >
              View Cart
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;