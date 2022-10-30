import React, { useState, useEffect } from "react";
import styles from "../../styles/Wishlist.module.scss";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState();
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products?limit=69`;
    const fetchProducts = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setWishlist(json.slice(15, 18));
      try {
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <main className={styles["wishlist-container"]}>
      <header>
        <h3>Your Wish List</h3>
        <a href="#">View All</a>
      </header>
    </main>
  );
};

export default Wishlist;
