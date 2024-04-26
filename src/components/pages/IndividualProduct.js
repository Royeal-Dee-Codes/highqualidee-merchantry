import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartData } from "../../context/CartProvider";
import moneyFormatter from "../../util/moneyFormatter";

export default function IndividualProduct(props) {
  const { addProduct } = CartData();
  const formatter = moneyFormatter;
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (!data) {
          throw new Error("Empty response received");
        }
        setProduct(data);
      })
      .catch((err) => {
        console.error("Fetch single product error:", err);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addProduct(product);
    }
  };

  return (
    <div className="individual-product-page">
      {product && (
        <>
          <h1 className="product-name">{product.title}</h1>
          <div className="product">
            <div
              className="product-image"
              style={{ backgroundImage: `url(${product.image})` }}
            />
            <div className="product-description-container">
              <h5 className="product-price">{formatter(product.price)}</h5>
              <h5 className="product-description">{product.description}</h5>
              <h5 className="product-category">{product.category}</h5>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
