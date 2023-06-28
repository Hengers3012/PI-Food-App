import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Food_Logo.png";
import Chef from "./cook-said-oops-no-food-available-2119974-1784257.png";
import styles from "./Error_404.module.css";

export default function Error_404() {
  return (
    <div className={styles.page}>
      <div className={styles.contLanding}>
        <div className={styles.navBarContainer}>
          <div className={styles.navBarContPart1}>
            <div className={styles.logo}>
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.containerImgChef}>
          <img src={Chef} alt="" />
        </div>

        <div className={styles.containerBtnHome}>
          <Link className={styles.btnHome} to="/">
            RETURN LANDING PAGE
          </Link>
        </div>
      </div>
    </div>
  );
}
