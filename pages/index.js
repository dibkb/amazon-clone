import Head from "next/head";
import Image from "next/image";
import Banner from "../src/components/Banner";
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
      </div>
    </div>
  );
}
