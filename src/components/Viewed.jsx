import React, { useEffect, useState } from "react";
import styles from "../../styles/Viewed.module.scss";
const Viewed = () => {
  const [viewed, setViewed] = useState();
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products?limit=69`;
    const fetchProducts = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setViewed(json.slice(11, 17));
      try {
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className={styles["viewed-container"]}>
      <header>
        <h3>Your Recently Viewed Items</h3>
        <a href="#">View All</a>
      </header>
    </div>
  );
};

export default Viewed;
