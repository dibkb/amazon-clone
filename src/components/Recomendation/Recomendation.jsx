import React from "react";
import Image from "next/image";
import styles from "../../../styles/Recomendation.module.scss";
import Product from "./Product";
const Recomendation = ({ products }) => {
  return (
    <div className={styles["recomendation"]}>
      <p>Inspired by your browsing history</p>
      <div className={styles["product-container"]}>
        {products.map((ele, index) => {
          return <Product key={JSON.stringify(index + ele.id)} ele={ele} />;
        })}
      </div>
    </div>
  );
};

export default Recomendation;
