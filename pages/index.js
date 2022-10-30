import Head from "next/head";
import Banner from "../src/components/Banner";
import Categories from "../src/components/Body Components/Categories";
import Pixel from "../src/components/Body Components/Pixel";
import Shamshera from "../src/components/Body Components/Shamshera";
import Header from "../src/components/Header";
import Recomendation from "../src/components/Recomendation/Recomendation";
import styles from "../styles/Home.module.scss";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />
      {/* Body */}
      <div className={styles["body"]}>
        <Banner />
        <aside className={styles["orders"]}>Your Recent Orders</aside>
        <Categories />
        <aside className={styles["history"]}>Your Recently Viewed Items</aside>
        <section className={styles["small-banner"]}>
          <Pixel />
          <Shamshera />
        </section>
        <Recomendation products={products} />
        <aside className={styles["wishlist"]}>Your Wishlist</aside>
      </div>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch(
    "https://fakestoreapi.com/products?limit=7"
  ).then((res) => res.json());
  return {
    props: {
      products: products,
    },
  };
}
