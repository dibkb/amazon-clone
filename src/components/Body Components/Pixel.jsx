import React from "react";
import Image from "next/dist/client/image";
import pixel_image from "../../../public/pixel.svg";
import styles from "../../../styles/BodyComponents.module.scss";
const Pixel = () => {
  return (
    <div className={styles["pixel-container"]}>
      <aside className={styles["text"]}>
        <h3>Shop the new Pixel 7</h3>
        <p>
          Experience smooth operation and brilliant user interface with the
          5G-ready Google Pixel 7{" "}
        </p>
        <button>Learn More</button>
      </aside>
      <aside>
        <Image
          alt={"Pixel 7"}
          src={pixel_image.src}
          width={pixel_image.width}
          height={pixel_image.height}
        />
      </aside>
    </div>
  );
};

export default Pixel;
