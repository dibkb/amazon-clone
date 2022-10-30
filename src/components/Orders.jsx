import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Orders.module.scss";
const Orders = () => {
  const [orders, setOrders] = useState();
  const [late] = useState(Math.random() < 0.5);
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products?limit=69`;
    const fetchProducts = async () => {
      const response = await fetch(URL);
      const json = await response.json();
      setOrders(json.slice(7, 10));
      try {
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className={styles["orders-container"]}>
      <header>
        <h3>Your Recent Orders</h3>
        <a href="#">View All</a>
      </header>
      <div className={styles["orders-list-container"]}>
        {orders?.map((ele, id) => {
          return (
            <main key={ele.title} className={styles["orders-main"]}>
              <span className={styles["image"]}>
                <Image
                  src={ele.image}
                  alt={ele.title}
                  height={50}
                  width={50}
                  object-fit={"contain"}
                />
              </span>
              <div className={styles["info"]}>
                <p className={styles["title"]}>{ele.title}</p>
                <span className={styles["delivery-status"]}>
                  <p>Status: </p>
                  {!late ? (
                    <em> Out for Delivery</em>
                  ) : (
                    <em className={styles["waring"]}>Running Late</em>
                  )}
                </span>
              </div>
            </main>
          );
        })}
      </div>
    </div>
  );
};

export default Orders;
