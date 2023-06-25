import React from "react";
import styles from "./Paginate.module.css";

export default function Paginate({
  recipe_for_page,
  allRecipes,
  pagination,
  pagePresent,
}) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipe_for_page); i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul className={styles.containerPaginate}>
        <li className={styles.conatinerForPage}>
          {pages?.map((num, index) => (
            <button
              key={`pagina${index}`}
              className={
                pagePresent === num
                  ? styles.containerPageSelec
                  : styles.containerPages
              }
              onClick={() => pagination(num)}
            >
              {num}
            </button>
          ))}
        </li>
      </ul>
    </div>
  );
}
