import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "../SearchBar/Search_Bar";
import styles from "./Landing_Page.module.css";

export default function LandingPageApp() {
  return (
    <div className={styles.page}>
      <div className={styles.contLanding}>
        <div className={styles.navBarContainer}>
          <div className={styles.navBarContPart1}>
            <Link to="/" className={styles.logo}>
              <img src={"./assets/Image/Food_Logo.png"} alt="" />
            </Link>
          </div>

          <div className={styles.navBarPart2}>
            <Link to="/about" className={styles.route}>
              <h1>Home</h1>
            </Link>
            <Link to="/about" className={styles.route}>
              <h1>About</h1>
            </Link>
            <Link to="/about" className={styles.route}>
              <h1>FAQ</h1>
            </Link>
          </div>
          <div className={styles.searchBarContainer}>
            <SearchBar />
          </div>
        </div>

        <div>
          <Link className={styles.btnHome} to="/home">
            HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  );
}
