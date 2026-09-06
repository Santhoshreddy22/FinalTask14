import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {

    return (
      <section className="empty-cart">

        <div className="empty-cart-icon">
          🛒
        </div>

        <h1>Your Cart is Empty</h1>

        <p>
          Add some products to your cart
          and they will appear here.
        </p>

        <Link
          to="/products"
          className="primary-btn"
        >
          Start Shopping
        </Link>

      </section>
    );
  }

  return (
    <section className="cart-page">

      <div className="page-header">

        <span className="small-title">
          SHOPPING CART
        </span>

        <h1>Your Cart</h1>

        <p>
          Review your selected products.
        </p>

      </div>

      <div className="cart-layout">

        <div className="cart-items">

          {cart.map(item => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="cart-item-info">

                <h3>
                  {item.title}
                </h3>

                <p>
                  ${item.price.toFixed(2)}
                </p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>

              <div className="cart-item-right">

                <strong>
                  $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </strong>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeFromCart(
                      item.id
                    )
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="cart-summary">

          <h2>Order Summary</h2>

          <div className="summary-row">
            <span>Subtotal</span>
            <strong>
              ${totalPrice.toFixed(2)}
            </strong>
          </div>

          <div className="summary-row">
            <span>Delivery</span>
            <strong>FREE</strong>
          </div>

          <hr />

          <div className="summary-total">
            <span>Total</span>
            <strong>
              ${totalPrice.toFixed(2)}
            </strong>
          </div>

          <button className="checkout-btn">
            Proceed to Checkout
          </button>

          <button
            className="clear-btn"
            onClick={clearCart}
          >
            Clear Cart
          </button>

        </div>

      </div>

    </section>
  );
}

export default Cart;