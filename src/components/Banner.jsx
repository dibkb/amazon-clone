import React from "react";
import Image from "next/dist/client/image";
import beats_image from "../../public/beats.svg";
import styles from "../../styles/Banner.module.scss";
const Banner = () => {
  return (
    <div className={styles["banner-container"]}>
      <section className={styles["right"]}>
        <Image
          src={beats_image.src}
          width={313}
          height={235}
          layout="fill"
          objectFit="contain"
        />
      </section>
      <section className={styles["left"]}>
        <em>Deal of the day</em>
        <h3>Intoducing studio beats by Dr Dre .</h3>
        <small>
          Wireless over-ear headphones delivers premium sound with Active Noise
          Cancelling
        </small>
        <button>See all Deals</button>
      </section>
    </div>
  );
};

export default Banner;
