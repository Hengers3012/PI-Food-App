import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../Redux/Actions";
import { useEffect, useState } from "react";
import styles from "./Paginate.module.css";

export default function Paginate({ totalPages }) {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.currentPage);
  const [input, setInput] = useState(page);

  useEffect(() => {
    setInput(page);
  }, [page]);

  const nextPage = async () => {
    dispatch(actions.setPage(page + 1));
    setInput(page + 1);
  };
  const prevPage = () => {
    dispatch(actions.setPage(page - 1));
    setInput(page - 1);
  };

  const validate = (e) => {
    if (e.keyCode === 13) {
      if (
        parseInt(e.target.value) < 1 ||
        parseInt(e.target.value) > totalPages ||
        isNaN(parseInt(e.target.value))
      ) {
        dispatch(actions.setPage(1));
        setInput(1);
      } else {
        dispatch(actions.setPage(parseInt(e.target.value)));
        setInput(parseInt(e.target.value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  // Este componente renderiza una barra de paginación que permite al usuario navegar entre diferentes páginas de una lista. La barra de paginación incluye botones "Anterior" y "Siguiente" para avanzar o retroceder una página, y un cuadro de texto en el que el usuario puede ingresar manualmente el número de página que desea ver.

  return (
    <div className={styles.containerPaginate}>
      <div></div>
      <div className={styles.paginate}>
        <button className={styles.btn} disabled={page === 1} onClick={prevPage}>
          <i class="fa-solid fa-backward"></i>
        </button>

        <input
          onKeyDown={validate}
          onChange={onChange}
          autoComplete="off"
          value={input}
        />

        <button
          className={styles.btn}
          disabled={input === totalPages}
          onClick={nextPage}
        >
          <i class="fa-solid fa-forward"></i>
        </button>
      </div>

      <div className={styles.totalPage}>
        <p>
          Page: {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}

// import React from "react";
// import styles from "./Paginate.module.css";

// export default function Paginate({
//   recipe_for_page,
//   allRecipes,
//   pagination,
//   pagePresent,
// }) {
//   const pages = [];

//   for (let i = 1; i <= Math.ceil(allRecipes / recipe_for_page); i++) {
//     pages.push(i);
//   }

//   return (
//     <div>
//       <ul className={styles.containerPaginate}>
//         <li className={styles.conatinerForPage}>
//           {pages?.map((num, index) => (
//             <button
//               key={`pagina${index}`}
//               className={
//                 pagePresent === num
//                   ? styles.containerPageSelec
//                   : styles.containerPages
//               }
//               onClick={() => pagination(num)}
//             >
//               {num}
//             </button>
//           ))}
//         </li>
//       </ul>
//     </div>
//   );
// }
