import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AppContext } from "../context/AppContext";

const Products = () => {
  const { products, query, errmsg ,images} = useContext(AppContext);

  if (!errmsg) {
    return (
      <div className="products">
        <div className="products-info">
          <h1>Our Products</h1>
          <div className="products-list">
            {products
              .filter((product) =>
                product.category.includes(query)
              )
              .map((product) => (
                <div key={product.id} className="product-card">
                  <Link to="/product" state={{ id: product.id }}>
                    <img src={`${images[`img${product.id}`]}`} alt={product.category} />
                    <h3>{product.title}</h3>
                    <p>$ {product.price}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="net-slow">
        <h3>Unable to fetch data, please check your internet connection</h3>
      </div>
    );
  }
};

export default Products;
