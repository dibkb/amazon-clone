import React, { useState } from "react";
import styles from "../../../styles/Recomendation.module.scss";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
const Rating = ({ rating, count }) => {
  const [avgRating] = useState(Math.ceil(rating));
  return (
    <div className={styles["rating-container"]}>
      <span className={styles["rate"]}>
        {[...Array(avgRating).keys()].map((ele, index) => {
          return (
            <IoIosStar color={"#FF9900"} key={JSON.stringify(ele + index)} />
          );
        })}
        {[...Array(5 - avgRating).keys()].map((ele, index) => {
          return (
            <IoIosStarOutline
              color={"#FF9900"}
              key={JSON.stringify(ele + index)}
            />
          );
        })}
      </span>
      <span className={styles["count"]}>{count}</span>
    </div>
  );
};

export default Rating;
