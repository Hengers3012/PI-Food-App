import React from "react";
import styles from "./Cargando.module.css";

export default function CargandoPage() {
  const text = "LOADING...";
  const letters = text.split("");

  return (
    <div className={styles.container}>
      <div className={styles.loading}>
        {letters.map((letter, index) => (
          <span
            key={index}
            className={styles.letter}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  );
}
