import React from "react";
import styles from "./Landing_Page.module.css";

export default function Landing_Page_App() {
  return (
    <div className={styles.contLanding}>
      <div className={styles.routeBar}>
        <div className={styles.logo}>
          <img src={"./assets/Image/Food_Logo.png"} alt="" />
        </div>

        <div className={styles.other}>
          <h1>Henry Food</h1>
        </div>
      </div>
    </div>
  );
}
