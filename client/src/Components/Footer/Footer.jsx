import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.navBottonContainer}>
      <div className={styles.navBottonLogo}>
        <img
          src="https://camo.githubusercontent.com/35b81f213ddb0e019b3567f6982d740bb2d01ae5dd712a1537e09e826e940228/68747470733a2f2f643331757a386c77666d796e38672e636c6f756466726f6e742e6e65742f4173736574732f6c6f676f2d68656e72792d77686974652d6c672e706e67"
          alt=""
        />
        <h2>Created by Hengers Rosario</h2>
      </div>
      <div className={styles.navBottonElements}>
        <ul>
          <li>
            <a
              href="http://github.com/Hengers3012"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-square-github"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/hengers-rosario-05a169275/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.soyhenry.com/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-heading"></i>
            </a>
          </li>
        </ul>
        {/* <ul>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </ul>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          {/* <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-youtube"></i> 
        </a> */}
      </div>
    </div>
  );
}
