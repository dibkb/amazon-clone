import React from "react";
import Image from "next/image";
import styles from "../../../styles/Recomendation.module.scss";
import { toRupee } from "../../../public/utils/functions";
import Rating from "./Rating";
const Product = ({ ele }) => {
  return (
    <div key={JSON.stringify(ele.id)} className={styles["product"]}>
      <Image
        src={ele.image}
        alt={ele.description}
        width={150}
        height={150}
        objectFit={"cover"}
      />
      <p>{ele.title}</p>
      <Rating rating={ele.rating.rate} count={ele.rating.count} />
      <span className={styles["price"]}>₹ {toRupee(ele.price)}</span>
    </div>
  );
};

export default Product;
