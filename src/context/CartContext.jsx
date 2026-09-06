import {
  createContext,
  useContext,
  useReducer,
} from "react";

import {
  cartReducer,
  initialCartState,
} from "../reducer/cartReducer";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialCartState
  );

  const addToCart = product => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const increaseQuantity = id => {
    dispatch({
      type: "INCREASE",
      payload: id,
    });
  };

  const decreaseQuantity = id => {
    dispatch({
      type: "DECREASE",
      payload: id,
    });
  };

  const removeFromCart = id => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  const clearCart = () => {
    dispatch({
      type: "CLEAR",
    });
  };

  const totalItems = state.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = state.cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}