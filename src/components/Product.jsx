import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";
import { Link } from 'react-router-dom';
import { AppContext } from "../context/AppContext";

const Product = () => {
  const location = useLocation();
  const { id } = location.state || {};
  const { products, addToCart,images } = useContext(AppContext);
  const [product, setProduct] = useState({});
  const [errmsg, setErrmsg] = useState(false);

  const getSingleData = async () => {
    try {
      if (id) {
        setProduct(products[id-1]);
      } else {
        setErrmsg(true);
      }
    } catch (error) {
      setErrmsg(true);
    }
  };

  useEffect(() => {
    getSingleData();
  }, [id]);

  if (!errmsg) {
    return (
      <div className="product">
        <div className="product-item">
          <button className="back-home"><Link to="/products">Back</Link></button>
            <div className="item-img">
              <img src={`${images[`img${id}`]}`} alt={product.category} />
            </div>
            <div className="product-item-info">
              <div>
                <b>Product Title : </b>
                {product.title}
              </div>
              <div>
                <b>Category : </b>
                 {product.category}
              </div>
              <div>
                <b>Description : </b>
                {product.desc}
              </div>
              <div className="item-price">
                <b>Price : </b> $ {product.price}
              </div>
              <button onClick={() => addToCart(product)} className="cart-btn">
                Add to cart
              </button>
            </div>
          </div>
      </div>
    );
  } else {
    return (
      <div className="net-slow">
        <h1>Something Went Wrong</h1>
      </div>
    );
  }
};

export default Product;
