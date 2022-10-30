import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/dist/shared/lib/head";
import Header from "../src/components/Header";
import styles from "../styles/Productpage.module.scss";
const Product = () => {
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const URL = `https://fakestoreapi.com/products/${router.query.id}`;
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const json = await response.json();
        setProduct(json);
        setLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [router.query.id]);
  return (
    <div className={styles["product-container"]}>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {loaded && (
        <div className={styles["body"]}>
          <section className={styles["image"]}>{product.title}</section>
          <section className={styles["info"]}></section>
        </div>
      )}
      {!loaded && <p className={styles["loading-text"]}>Loading...</p>}
    </div>
  );
};

export default Product;
