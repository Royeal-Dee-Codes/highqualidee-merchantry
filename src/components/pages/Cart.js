import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import MoneyFormatter from "../../util/moneyFormatter";

export default function Cart() {
  const { cart, clearCart, removeProduct, setCart } = useContext(CartContext);
  const formatter = MoneyFormatter;

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const calculateShipping = () => {
    // Example shipping calculation
    return cart.length > 0 ? 10 : 0; // $10 flat rate shipping if cart is not empty
  };

  const calculateCartTotal = () => {
    return calculateSubtotal() + calculateShipping();
  };

  const handleAddQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setCart(updatedCart);
  };

  const handleSubtractQuantity = (productId) => {
    const updatedCart = cart.map((product) =>
      product.id === productId && product.quantity > 1
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setCart(updatedCart);
  };

  const renderCartProducts = () => {
    return cart.length > 0 ? (
      cart.map((product) => (
        <div key={product.id} className="product-wrapper">
          <div className="individual-product">
            <img
              src={product.image}
              alt="product-img"
              className="product-image"
            />
            <div className="product-desc">
              <h5 className="product-name">{product.title}</h5>
              <h5 className="product-category">{product.category}</h5>
              <h5>
                <Link to={`/products/${product.id}`}>See details</Link>
              </h5>
            </div>
            <div className="product-quantity">
              <div className="quantity-control">
                <button onClick={() => handleSubtractQuantity(product.id)}>
                  -
                </button>
                <h2>{product.quantity}</h2>
                <button onClick={() => handleAddQuantity(product.id)}>+</button>
              </div>
              <h2 className="product-price">{formatter(product.price)}</h2>
              <div className="remove-item">
                <button onClick={() => removeProduct(product.id)}>
                  Remove Item
                </button>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <h1>No products in cart</h1>
    );
  };

  return (
    <div className="cart-page-container">
      <div className="header">
        <h1>Cart</h1>
      </div>

      <div className="user-cart">
        {renderCartProducts()}
        <div className="price">
          <div>
            <span>Subtotal: </span>
            <span>{formatter(calculateSubtotal())}</span>
          </div>
          <div>
            <span>Shipping: </span>
            <span>{formatter(calculateShipping())}</span>
          </div>
          <div>
            <span>Total: </span>
            <span>{formatter(calculateCartTotal())}</span>
          </div>
        </div>
        <button className="checkout-btn">Checkout</button>
        <button className="empty-btn" onClick={clearCart}>
          Empty Cart
        </button>
      </div>
    </div>
  );
}
