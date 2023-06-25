import React from "react";

export default function Paginated({
  recipesPerPage,
  allRecipes,
  pagination,
  currentPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        <li>
          {pageNumbers?.map((number, index) => (
            <button
              key={`pagina${index}`}
              className={
                currentPage === number
                  ? "styles.selectedPage"
                  : "styles.linkPaginated"
              }
              onClick={() => pagination(number)}
            >
              {number}
            </button>
          ))}
        </li>
      </ul>
    </nav>
  );
}
