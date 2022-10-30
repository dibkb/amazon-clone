import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Recomendation.module.scss";
import { toRupee } from "../../../public/utils/functions";
import Rating from "./Rating";
const Product = ({ ele }) => {
  return (
    <Link
      href={{
        pathname: "/product",
        query: { id: ele.id },
      }}
      passHref
      key={JSON.stringify(ele.id)}
      className={styles["product"]}
    >
      <Image
        src={ele.image}
        alt={ele.description}
        width={150}
        height={150}
        object-fit={"cover"}
      />
      <p>{ele.title}</p>
      <Rating rating={ele.rating.rate} count={ele.rating.count} />
      <span className={styles["price"]}>₹ {toRupee(ele.price)}</span>
    </Link>
  );
};

export default Product;
