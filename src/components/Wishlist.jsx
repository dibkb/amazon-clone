import React, { useState, useEffect } from "react";
import { toRupee } from "../../public/utils/functions";
import styles from "../../styles/Wishlist.module.scss";
import Image from "next/image";
const Wishlist = () => {
  const [wishlist, setWishlist] = useState();
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products?limit=69`;
    const fetchProducts = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setWishlist(json.slice(17, 20));
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
      <main className={styles["items-container"]}>
        {wishlist?.map((element, id) => {
          return (
            <div key={element.title} className={styles["viewed-item"]}>
              <span className={styles["image"]}>
                <Image
                  src={element.image}
                  alt={element.title}
                  height={50}
                  width={50}
                  object-fit={"contain"}
                />
              </span>
              <div className={styles["info"]}>
                <span>
                  <p>{element.title}</p>
                  <em>₹ {toRupee(element.price)}</em>
                </span>
                <footer>
                  <button>Add to Cart</button>
                  <a href="#">Remove from wishlist</a>
                </footer>
              </div>
            </div>
          );
        })}
      </main>
    </main>
  );
};

export default Wishlist;
