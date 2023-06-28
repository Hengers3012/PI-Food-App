import React from "react";
import { Link } from "react-router-dom";
import ImageLand from "./c9dfc4bf28a6886e9d11b513bf2669af-cocinero-leyendo-personaje-de-libro-de-recetas.png";
import Logo from "./Food_Logo.png";
import styles from "./Landing_Page.module.css";

export default function LandingPageApp() {
  return (
    <div className={styles.page}>
      <div className={styles.contLanding}>
        <div className={styles.navBarContainer}>
          <div className={styles.navBarContPart1}>
            <Link to="/" className={styles.logo}>
              <img src={Logo} alt="" />
            </Link>
          </div>
        </div>
        <h1>SoyHenry's Kitchen</h1>
        <div className={styles.containerImageLand}>
          <img src={ImageLand} alt="" />
        </div>

        <div className={styles.containerBtnHome}>
          <Link className={styles.btnHome} to="/home">
            HOME PAGE
          </Link>
        </div>
      </div>
    </div>
  );
}
