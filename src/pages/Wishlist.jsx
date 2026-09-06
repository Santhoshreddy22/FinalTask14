import { useState } from "react";

function Wishlist() {

  const [wishlist, setWishlist] =
    useState([]);

  const products = [
    {
      id: 1,
      name: "Premium Collection",
      price: 49.99,
      icon: "⭐",
    },

    {
      id: 2,
      name: "Smart Essentials",
      price: 79.99,
      icon: "💎",
    },

    {
      id: 3,
      name: "Fashion Picks",
      price: 39.99,
      icon: "👕",
    },

    {
      id: 4,
      name: "Daily Essentials",
      price: 29.99,
      icon: "🛍️",
    },
  ];

  const toggleWishlist = product => {

    setWishlist(previous => {

      const exists = previous.some(
        item => item.id === product.id
      );

      if (exists) {
        return previous.filter(
          item => item.id !== product.id
        );
      }

      return [
        ...previous,
        product,
      ];
    });
  };

  return (
    <section className="wishlist-page">

      <div className="page-header">

        <span className="small-title">
          YOUR FAVORITES
        </span>

        <h1>Wishlist ❤️</h1>

        <p>
          Save products you love.
        </p>

      </div>

      <div className="wishlist-grid">

        {products.map(product => {

          const saved =
            wishlist.some(
              item =>
                item.id === product.id
            );

          return (
            <div
              className="wishlist-card"
              key={product.id}
            >

              <div className="wishlist-icon">
                {product.icon}
              </div>

              <h3>
                {product.name}
              </h3>

              <strong>
                ${product.price}
              </strong>

              <button
                onClick={() =>
                  toggleWishlist(product)
                }
              >
                {saved
                  ? "❤️ Saved"
                  : "♡ Add to Wishlist"}
              </button>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Wishlist;