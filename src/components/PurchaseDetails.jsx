import React, { useState } from "react";
import { CgRadioCheck, CgRadioChecked } from "react-icons/cg";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import styles from "../../styles/PurchaseDetails.module.scss";
import { toRupee } from "../../public/utils/functions";
const PurchaseDetails = ({ price }) => {
  const [buyUsed, setBuyUsed] = useState(false);
  const [options, setOptions] = useState(1);
  return (
    <div className={styles["container"]}>
      <header>
        <div className={styles["radio"]}>
          <div
            className={styles["new"]}
            onClick={() => {
              setBuyUsed(false);
            }}
          >
            {!buyUsed ? (
              <CgRadioChecked className={styles["radio-box-checked"]} />
            ) : (
              <CgRadioCheck className={styles["radio-box"]} />
            )}
            <span>
              <b>Buy new :</b>
              <small>₹{toRupee(price)}</small>
            </span>
          </div>
          <div
            className={styles["used"]}
            onClick={() => {
              setBuyUsed(true);
            }}
          >
            {buyUsed ? (
              <CgRadioChecked className={styles["radio-box-checked"]} />
            ) : (
              <CgRadioCheck className={styles["radio-box"]} />
            )}
            <span>
              <b>Buy used : </b>
              <small>₹{toRupee(price)}</small>
            </span>
          </div>
        </div>
        <span className={styles["select-shipping"]}>
          Select a shipping address{" "}
        </span>
      </header>
      <main>
        <span onClick={() => setOptions(1)}>
          {options === 1 ? (
            <MdCheckBox className={styles["icon"]} />
          ) : (
            <MdCheckBoxOutlineBlank className={styles["icon-blank"]} />
          )}
          <p>
            Yes I want <b>FREE Two Day Shipping</b> with <em>Amazon Prime</em>
          </p>
        </span>
        <span onClick={() => setOptions(2)}>
          {options === 2 ? (
            <MdCheckBox className={styles["icon"]} />
          ) : (
            <MdCheckBoxOutlineBlank className={styles["icon-blank"]} />
          )}
          <p>
            Include <em>2 Year Protection</em> for
            <em className={styles["orange"]}> ₹420</em>
          </p>
        </span>
        <span onClick={() => setOptions(3)}>
          {options === 3 ? (
            <MdCheckBox className={styles["icon"]} />
          ) : (
            <MdCheckBoxOutlineBlank className={styles["icon-blank"]} />
          )}
          <p>
            Include <em>4 Year Protection</em> for
            <em className={styles["orange"]}> ₹690</em>
          </p>
        </span>
      </main>
    </div>
  );
};

export default PurchaseDetails;
