import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import moneyFormatter from "../../util/moneyFormatter";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("all");
  const { addProduct, cart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const url = searchTerm === "all" ? "" : `/category/${searchTerm}`;
        const response = await fetch(`https://fakestoreapi.com/products${url}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(
          data.map((product) => {
            const existingProduct = cart.find((item) => item.id === product.id);
            product.quantity = existingProduct ? existingProduct.quantity : 0;
            return product;
          })
        );
      } catch (error) {
        console.error("Fetch Products Error: ", error);
      }
    };

    fetchProducts();
  }, [searchTerm, cart]);

  const handleFilterClick = (category) => {
    setSearchTerm(category);
  };

  const handleAddToCart = (product) => {
    addProduct(product);
  };

  const handleAddQuantity = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  const handleSubtractQuantity = (productId) => {
    const updatedProducts = products.map((product) =>
      product.id === productId && product.quantity > 0
        ? { ...product, quantity: product.quantity - 1 }
        : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="products-page">
      <h1 className="header" style={{ fontSize: 70 }}>
        HighQualiDee Products
      </h1>
      <div className="button-container">
        {[
          "all",
          "men's clothing",
          "women's clothing",
          "jewelery",
          "electronics",
        ].map((category) => (
          <button
            key={category}
            className="filter-btns"
            onClick={() => handleFilterClick(category)}
          >
            {`HighQualiDee ${
              category.charAt(0).toUpperCase() + category.slice(1)
            }`}
          </button>
        ))}
      </div>

      <div className="container-for-all-products">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img
              src={product.image}
              alt="product-img"
              className="product-image"
            />

            <div className="product-description-container">
              <h2 className="product-price">{moneyFormatter(product.price)}</h2>
              <h4 className="product-name">{product.title}</h4>
              <h5 className="product-description">
                {product.description.slice(0, 50) + "..."}
              </h5>
              <h5 className="product-category">{product.category}</h5>
              <h5 className="product-link">
                <Link to={`/Products/${product.id}`}>See More Details</Link>
              </h5>
              <div className="quantity-control">
                <button onClick={() => handleSubtractQuantity(product.id)}>
                  -
                </button>
                <h2>{product.quantity}</h2>
                <button onClick={() => handleAddQuantity(product.id)}>+</button>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
