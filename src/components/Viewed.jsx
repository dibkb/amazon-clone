import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Viewed.module.scss";
import { toRupee } from "../../public/utils/functions";
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
  console.log(viewed);
  return (
    <div className={styles["viewed-container"]}>
      <header>
        <h3>Your Recently Viewed Items</h3>
        <a href="#">View All</a>
      </header>
      <main className={styles["items-container"]}>
        {viewed?.map((element, id) => {
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
                <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Viewed;
