import Head from "next/head";
import Banner from "../src/components/Banner";
import Categories from "../src/components/Body Components/Categories";
import Pixel from "../src/components/Body Components/Pixel";
import Shamshera from "../src/components/Body Components/Shamshera";
import Header from "../src/components/Header";
import Orders from "../src/components/Orders";
import Recomendation from "../src/components/Recomendation/Recomendation";
import Viewed from "../src/components/Viewed";
import Wishlist from "../src/components/Wishlist";
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
        <Orders />
        <Categories />
        <Viewed />
        <section className={styles["small-banner"]}>
          <Pixel />
          <Shamshera />
        </section>
        <Recomendation products={products} />
        <Wishlist />
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
