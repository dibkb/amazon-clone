import React from "react";
import styles from "../../styles/Header.module.scss";
import { AmazonLogo } from "../../public/svg/Amazonlogo";
import AccInfo from "./Header Components/AccInfo";
// react icons
import { BsSearch } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { Cart } from "./Header Components/Cart";
const Header = () => {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["logo"]}>
          <AmazonLogo />
        </div>
        <div className={styles["search"]}>
          <input type="text" placeholder="Search for anything" />
          <button>
            <BsSearch />
          </button>
        </div>
        <div className={styles["account-info"]}>
          <AccInfo heading={"Hello,John"} text={"Accounts & Lists"} />
          <AccInfo heading={"Returns"} text={"& Orders"} />
          <Cart item={2} />
        </div>
      </div>
      <div className={styles["header-bottom"]}>
        <span>
          <HiMenu />
          <p>All</p>
        </span>
        <span>Prime Video</span>
        <span>Amazon Business</span>
        <span>Amazon Basics</span>
        <span>Audible</span>
        <span>Today&apos;s Deals</span>
        <span>Coupons</span>
        <span>Gift Cards</span>
        <span>Subscribe and Save</span>
      </div>
    </>
  );
};

export default Header;
