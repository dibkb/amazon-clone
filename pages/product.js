import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdFacebook } from "react-icons/md";
import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { IoMdCart } from "react-icons/io";
import { useRouter } from "next/router";
import { toRupee } from "../public/utils/functions";
import Head from "next/dist/shared/lib/head";
import Header from "../src/components/Header";
import styles from "../styles/Productpage.module.scss";
import Rating from "../src/components/Recomendation/Rating";
import PurchaseDetails from "../src/components/PurchaseDetails";
const Product = () => {
  const [outOfStock] = useState(Math.random() < 0.5);
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
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
  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className={styles["product-container"]}>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {loaded && (
        <div className={styles["body"]}>
          <section className={styles["image"]}>
            <Image
              src={product.image}
              height={500}
              width={500}
              alt={product.title}
            />
          </section>
          <section className={styles["info"]}>
            <header>
              <p>{product.category}</p>
              <h3>{product.title}</h3>
            </header>
            <section className={styles["review-social"]}>
              <div className={styles["review"]}>
                <Rating rating={product.rating.rate} />
                <p>{product.rating.count} customer reviews</p>
              </div>
              <div className={styles["social"]}>
                <span>
                  <MdFacebook className={styles["icons"]} />
                </span>
                <span>
                  <AiFillGoogleCircle className={styles["icons"]} />
                </span>
                <span>
                  <AiFillTwitterCircle className={styles["icons"]} />
                </span>
              </div>
            </section>
            <section className={styles["price-cart"]}>
              <span className={styles["price"]}>
                <small>Price</small>
                <p>???{toRupee(product.price)}</p>
              </span>
              <span className={styles["stock-info"]}>
                <p className={styles["out-of-stock"]}>
                  {outOfStock ? "Temporarily out of stock." : " "}
                </p>
                <span className={styles["shipping"]}>
                  <p>FREE Shipping</p>
                  <a href="#">Details</a>
                </span>
              </span>
              <span className={styles["cart-container"]}>
                <button className={styles["add"]} onClick={incrementQuantity}>
                  +
                </button>
                <div className={styles["cart-btn"]}>
                  <span className={styles["quantity"]}>{quantity}</span>
                  <span className={styles["cart"]}>
                    <IoMdCart />
                    <p>Add to Cart</p>
                  </span>
                </div>
              </span>
            </section>
            <PurchaseDetails price={product.price} />
            <footer className={styles["footer"]}>
              <h3 className={styles["footer-heading"]}>Product Description</h3>
              <p>{product.description}</p>
            </footer>
          </section>
        </div>
      )}
      {!loaded && <p className={styles["loading-text"]}>Loading...</p>}
    </div>
  );
};

export default Product;
