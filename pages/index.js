import Head from "next/head";
import Image from "next/image";
import Banner from "../src/components/Banner";
import Categories from "../src/components/Body Components/Categories";
import Pixel from "../src/components/Body Components/Pixel";
import Shamshera from "../src/components/Body Components/Shamshera";
import Header from "../src/components/Header";
import styles from "../styles/Home.module.scss";

export default function Home() {
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
        <aside className={styles["wishlist"]}>Your Wishlist</aside>
        <Categories />
        <section className={styles["small-banner"]}>
          <Pixel />
          <Shamshera />
        </section>
      </div>
    </div>
  );
}
