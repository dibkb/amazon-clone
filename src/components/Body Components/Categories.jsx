import React from "react";
import styles from "../../../styles/BodyComponents.module.scss";
import { categoriesData } from "../../../public/categories";
// import icons
const Categories = () => {
  return (
    <div className={styles["categories"]}>
      {categoriesData.map((ele, index) => {
        return (
          <span key={ele + index} className={styles["category-container"]}>
            <span className={styles["icon-container"]}>
              <ele.iconname
                fontSize="2.5rem"
                className={styles["icons"]}
                style={{
                  color: "#ff9900",
                }}
              />
            </span>
            <p> {ele.name}</p>
          </span>
        );
      })}
    </div>
  );
};

export default Categories;
