import React from "react";
import Image from "next/image";
import styles from "../../../styles/Recomendation.module.scss";
const Product = ({ ele }) => {
  console.log(ele);
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
      <span></span>
    </div>
  );
};

export default Product;
