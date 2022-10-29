import React from "react";
import { RiArrowDropDownFill } from "react-icons/ri";
import styles from "../../../styles/HeaderComponents.module.scss";
const AccInfo = ({ heading, text }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: ".6rem",
        alignItems: "center",
      }}
    >
      <div
        style={{
          color: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <a
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
          }}
          className={styles["text"]}
        >
          {heading}
        </a>
        <a
          style={{
            fontSize: "1rem",
            fontWeight: 500,
          }}
          className={styles["text"]}
        >
          {text}
        </a>
      </div>
      <span>
        <RiArrowDropDownFill
          style={{
            color: "fff",
            alignSelf: "center",
          }}
        />
      </span>
    </div>
  );
};

export default AccInfo;
