import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardRecipe from "../Card/Card";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import SearchBar from "../SearchBar/Search_Bar";
import FilterRecipesCards from "../Filter_Recipes/Filter_Recipes";
import Paginate from "../Paginate/Paginate";

import { getRecipe_Info } from "../../Redux/Actions";

import styles from "./Home_Page.module.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const [recipe_for_page] = useState(9);
  // const [recipeName, setRecipeName] = useState([]);
  const [pagePresent, setPagePresent] = useState(1);
  const allRecipes = useSelector((state) => state.recipes);

  const ult_Recipe_Index = pagePresent * recipe_for_page;
  const prim_Recipe_Index = ult_Recipe_Index - recipe_for_page;

  const recipes = allRecipes.slice(prim_Recipe_Index, ult_Recipe_Index);

  console.log(recipes);
  console.log(allRecipes);

  const paginado = (pages) => {
    setPagePresent(pages);
  };

  useEffect(() => {
    dispatch(getRecipe_Info());
  }, [dispatch]);

  console.log(allRecipes);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerNavBarTop}>
        <div>
          <NavBarTop />
        </div>

        <div className={styles.searchBar}>
          <SearchBar />
        </div>

        <div className={styles.containerBackBtn}>
          <Link to="/" className={styles.backBtn}>
            ⮐
          </Link>
        </div>
      </div>

      <div className={styles.continerFilter}>
        <FilterRecipesCards />
      </div>

      <div className={styles.cardRecipeContainer}>
        {recipes?.map((element, index) => {
          return (
            <div key={`card${index}`} className={styles.containerCard_indiv}>
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

      <div className={styles.containerPaginate}>
        <Paginate
          pagination={paginado}
          recipes={recipes}
          allRecipes={allRecipes.length}
          pagePresent={pagePresent}
          recipe_for_page={recipe_for_page}
        />
      </div>
    </div>
  );
}
