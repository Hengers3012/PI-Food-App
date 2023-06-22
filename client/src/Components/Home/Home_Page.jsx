import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getRecipe_Info } from "../../Redux/Actions";
import CardRecipe from "../Card/Card";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import SearchBar from "../SearchBar/Search_Bar";
import FilterRecipesCards from "../Filter_Recipes/Filter_Recipes";

import styles from "./Home_Page.module.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);

  // const [recipeName, setRecipeName] = useState([]);

  useEffect(() => {
    dispatch(getRecipe_Info());
  }, [dispatch]);

  console.log(recipes);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.containerNavBarTop}>
        <div>
          <NavBarTop />
        </div>

        <div>
          <SearchBar />
        </div>

        <div className={styles.containerBackBtn}>
          <Link to="/" className={styles.backBtn}>
            BACK
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
    </div>
  );
}
