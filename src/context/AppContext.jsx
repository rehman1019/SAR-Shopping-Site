import React, { createContext, useState, useEffect } from "react";
import img1 from "../assets/men1.jpg";
import img2 from "../assets/men2.webp";
import img3 from "../assets/men3.webp";
import img4 from "../assets/men4.webp";
import img5 from "../assets/men5.webp";
import img6 from "../assets/women1.webp";
import img7 from "../assets/women2.webp";
import img8 from "../assets/women3.webp";
import img9 from "../assets/women4.webp";
import img10 from "../assets/women5.jpg";
import img11 from "../assets/jew1.webp";
import img12 from "../assets/jew2.webp";
import img13 from "../assets/jew3.jpg";
import img14 from "../assets/jew4.jpeg";
import img15 from "../assets/jew5.webp";
import img16 from "../assets/elec1.jpg";
import img17 from "../assets/elec2.webp";
import img18 from "../assets/elec3.jpg";
import img19 from "../assets/elec4.webp";
import img20 from "../assets/elec5.webp";

// Create context
export const AppContext = createContext();

// Create provider component
export const AppProvider = ({ children }) => {
  const [images, setimages] = useState({
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
  });
  const products = [
    {
      id: 1,
      title: 'Blazer',
      category: "gents wear",
      desc: "By purchasing this product you will get blazer and pant",
      price: 55,
    },
    {
      id: 2,
      title: 'Hoodie',
      category: "gents wear",
      desc: "By purchasing this product you will get hoodie and night pant it is very soft and comfortable.",
      price: 40,
    },
    {
      id: 3,
      title: 'Jacket',
      category: "gents wear",
      desc: "By purchasing this product you will get jacket and jeans fant it is very comfortable.",
      price: 50,
    },
    {
      id: 4,
      title: 'Kurta',
      category: "gents wear",
      desc: "By purchasing this product you will get Kurta and Pyjama.pure cotton product for sure.",
      price: 34,
    },
    {
      id: 5,
      title: 'Shirt Pant',
      category: "gents wear",
      desc: "By purchasing this product you will get a shirt and pant which is pure cotton.",
      price: 45,
    },
    {
      id: 6,
      title: 'Burka',
      category: "womens wear",
      desc: "By purchasing this product you will get burka and scarf.it is pure cotton.",
      price: 38,
    },
    {
      id: 7,
      title: 'Jacket',
      category: "womens wear",
      desc: "By purchasing this product you will get jacket and skirt.",
      price: 42,
    },
    {
      id: 8,
      title: 'Dress',
      category: "womens wear",
      desc: "By purchasing this product you will get dress plazo and dupatta.",
      price: 55,
    },
    {
      id: 9,
      title: 'Saree',
      category: "womens wear",
      desc: "By purchasing this product you will get saree and blouse which is pure cotton.",
      price: 56,
    },
    {
      id: 10,
      title: 'Night suit',
      category: "womens wear",
      desc: "By purchasing this product you will get the bindle of suit.",
      price: 32,
    },
    {
      id: 11,
      title: 'Rings',
      category: "jewellery",
      desc: "By purchasing this product you will get two rings and we have different sizes which ever u want u can order.",
      price: 34,
    },
    {
      id: 12,
      title: 'Necklace set',
      category: "jewellery",
      desc: "By purchasing this product you will get necklace and ear rings which is 100 percent platinum.",
      price: 85,
    },
    {
      id: 13,
      title: 'Diamond rings',
      category: "jewellery",
      desc: "By purchasing this product you will get two diamond rings which are pure daimonds including the circle.",
      price: 1500,
    },
    {
      id: 14,
      title: 'Gold Ear Rings',
      category: "jewellery",
      desc: "By purchasing this product you will get two ear ring which are pure gold.",
      price: 200,
    },
    {
      id: 15,
      title: 'Necklace',
      category: "jewellery",
      desc: "By purchasing this product you will get a neclace having butterfly locket.",
      price: 60,
    },
    {
      id: 16,
      title: 'Headset',
      category: "electronic",
      desc: "By purchasing this product you will get headset of 3 types of pieces.",
      price: 55,
    },
    {
      id: 17,
      title: 'Smart Watch',
      category: "electronic",
      desc: "By purchasing this product you will get a samrt watch with hd display.",
      price: 75,
    },
    {
      id: 18,
      title: '4k Camera',
      category: "electronic",
      desc: "By purchasing this product you will get a camera which is 4k ultra hd.",
      price: 230,
    },
    {
      id: 19,
      title: 'Laptop',
      category: "electronic",
      desc: "By purchasing this product you will get a laptop with latest configurations and latest versions it is up to date.",
      price: 600,
    },
    {
      id: 20,
      title: 'iphone',
      category: "electronic",
      desc: "By purchasing this product you will get an iphone which is latest version.",
      price: 1300,
    },
  ];
  const [cartItems, setCartItems] = useState(
    () => JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser
      ? JSON.parse(savedUser)
      : { name: "Aathif", email: "aatif1019@gmail.com", phoneNo: "7396791560" };
  });
  const [query, setQuery] = useState("");
  const [errmsg, setErrmsg] = useState(false);

  // Update localStorage whenever cart items change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Update localStorage whenever user data changes
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
    alert("Added successfully");
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCartItems([]); 
    localStorage.removeItem("cartItems");
  };

  // Update user profile
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        user,
        updateUser,
        query,
        setQuery,
        errmsg,
        setErrmsg,
        images,
        setimages,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
