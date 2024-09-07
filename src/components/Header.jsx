import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import "../App.css";
import logo from "../assets/logo.png";

const Header = () => {
  const { setQuery, cartItems } = useContext(AppContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <header className="header">
      <div className="left-part">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="search-bar">
          <select title="visit product section to see result" className="input" onChange={(e) => setQuery(e.target.value)} >
            <option className="options" value=""> All products</option>
            <option className="options" value="gents wear"> gents wear</option>
            <option className="options" value="womens wear"> womens wear</option>
            <option className="options" value="jewellery"> jewellery</option>
            <option className="options" value="electronic">electronic</option>
          </select>
        </div>
      </div>
      <div className="right-part">
        <div className="nav-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`nav ${isMobileMenuOpen ? "nav-active" : ""}`}>
          <Link to="/" onClick={toggleMobileMenu}>
            Home
          </Link>
          <Link to="/products" onClick={toggleMobileMenu}>
            Products
          </Link>
          <Link to="/helpcenter" onClick={toggleMobileMenu}>
            Help Center
          </Link>
        </div>
        <div className="actions">
          <div className="cart-logo">
            <Link to="/cart" className="icon">
              <FaShoppingCart />
              <div className="count">{cartItems.length}</div>
            </Link>
          </div>
          <Link to="/account" className="icon">
            <FaUser />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
