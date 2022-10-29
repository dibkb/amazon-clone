import React from "react";
import { BiCart } from "react-icons/bi";
export const Cart = ({ item }) => {
  return (
    <div
      style={{
        display: "flex",
        color: "#fff",
        alignItems: "center",
        gap: ".5rem",
        cursor: "pointer",
      }}
    >
      <span
        style={{
          position: "relative",
        }}
      >
        <p
          style={{
            position: "absolute",
            top: "-1rem",
            left: "1.2rem",
            fontSize: "0.75rem",
            color: "#FF9900",
          }}
        >
          {item}
        </p>
        <BiCart fontSize="2.5rem" style={{ color: "#fff" }} />
      </span>
      <p
        style={{
          fontWeight: 500,
        }}
      >
        Cart
      </p>
    </div>
  );
};
