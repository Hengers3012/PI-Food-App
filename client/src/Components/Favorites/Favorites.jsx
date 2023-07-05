import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import CardRecipe from "../Card/Card";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import SearchBar from "../SearchBar/Search_Bar";
import FilterRecipesCards from "../Filter_Recipes/Filter_Recipes";
import Paginate from "../Paginate/Paginate";
import Footer from "../Footer/Footer";
import CargandoPage from "../Cargando/Cargando";

import { getRecipe_Info } from "../../Redux/Actions";

import styles from "./Favorites.module.css";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.recipesFavorites);

  const [recipe_for_page] = useState(9);
  const [pagePresent, setPagePresent] = useState(1);

  const ult_Recipe_Index = pagePresent * recipe_for_page;
  const prim_Recipe_Index = ult_Recipe_Index - recipe_for_page;

  const recipes = favorites.slice(prim_Recipe_Index, ult_Recipe_Index);

  console.log(recipes);
  console.log(favorites);

  const paginado = (pages) => {
    setPagePresent(pages);
  };

  useEffect(() => {
    dispatch(getRecipe_Info());
  }, [dispatch]);

  return (
    <div>
      <div className={styles.favoriteContainer}>
        <div className={styles.containerNavBarTop}>
          <div>
            <NavBarTop />
          </div>

          {/* <div className={styles.searchBar}>
            <SearchBar />
          </div> */}

          <div className={styles.containerBackBtn}>
            <Link to="/home" className={styles.backBtn}>
              ⮐
            </Link>
          </div>
        </div>

        {/* <div className={styles.continerFilter}>
          <FilterRecipesCards />
        </div> */}
        {favorites.length > 0 ? (
          <div className={styles.cardRecipeContainer}>
            {recipes?.map((element, index) => {
              return (
                <div
                  key={`card${index}`}
                  className={styles.containerCard_indiv}
                >
                  <div>
                    <CardRecipe
                      id={element.id}
                      health_score={element.health_score}
                      image={element.image}
                      name={element.name}
                      diets={element.diets}
                      createdInDb={element.createdInDb}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <CargandoPage />
        )}
        <div className={styles.containerPaginate}>
          <Paginate
            pagination={paginado}
            recipes={recipes}
            allRecipes={favorites.length}
            pagePresent={pagePresent}
            recipe_for_page={recipe_for_page}
          />
        </div>
        <div className={styles.containerFooter}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
