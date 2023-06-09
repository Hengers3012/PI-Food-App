import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Image/Food_Logo.png";
import styles from "./Nav_Bar_Top.module.css";

export default function NavBarTop() {
  return (
    <div className={styles.containerNavBarTop}>
      <div className={styles.navBarContPart1}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="" />
        </Link>
      </div>

      <div className={styles.containerNavBarRoute}>
        {/* <Link to="/about" className={styles.allRouteBtn}>
          ABOUT
  </Link>*/}
        <Link to="/favorites" className={styles.allRouteBtn}>
          FAVORITES
        </Link>
        <Link to="/created_recipe" className={styles.allRouteBtn}>
          CREATE NEW RECIPE
        </Link>
      </div>

      {/* <div className={styles.containerBackBtn}>
        <Link to="/" className={styles.backBtn}>
          BACK
        </Link>
      </div> */}
    </div>
  );
}
