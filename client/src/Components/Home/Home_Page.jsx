import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CardRecipe from "../Card/Card";
import Tooltips from "../Tooltips/Tooltips";
import NavBarTop from "../Nav_Bar_Top/Nav_Bar_Top";
import SearchBar from "../SearchBar/Search_Bar";
import FilterRecipesCards from "../Filter_Recipes/Filter_Recipes";
import Paginate from "../Paginate/Paginate";
import Footer from "../Footer/Footer";
import CargandoPage from "../Cargando/Cargando";

import { getRecipe_Info, tooltips_Detail } from "../../Redux/Actions";

import styles from "./Home_Page.module.css";

export default function HomePage() {
  const dispatch = useDispatch();
  const [recipe_for_page] = useState(9);
  // const [recipeName, setRecipeName] = useState([]);
  const [pagePresent, setPagePresent] = useState(1);
  const allRecipes = useSelector((state) => state.recipes);

  const ult_Recipe_Index = pagePresent * recipe_for_page;
  const prim_Recipe_Index = ult_Recipe_Index - recipe_for_page;

  const recipes = allRecipes.length
    ? allRecipes.slice(prim_Recipe_Index, ult_Recipe_Index)
    : [];

  const cardMouseOverHandler = async (event) => {
    // console.log(event.clientX);
    // console.log(event.clientY);

    let x = event.clientX;
    let y = event.clientY;

    const tooltip = document.getElementById("cardInfo");
    tooltip.style.visibility = "visible";
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;

    const element = event.target.parentElement.firstChild.firstChild;
    const id = element;
    if (id !== undefined && id !== null) {
      //dispatch(tooltips_Detail(parent.wholeText));
      console.log(id);
    } else console.log(id);
  };
  function cardMouseOutHandler(event) {
    const tooltip = document.getElementById("cardInfo");
    tooltip.style.visibility = "hidden";
    //dispatch(tooltips_Detail(""));
    //console.log(event.target);
  }

  //console.log(recipes);
  //console.log(allRecipes);

  const paginado = (pages) => {
    setPagePresent(pages);
  };

  useEffect(() => {
    dispatch(getRecipe_Info());
  }, [dispatch]);

  //console.log(allRecipes);
  //Funcion que muestra el div en la posicion del mouse
  // function cardMouseOverHandler(event) {
  //   // const ele = event.target.childNodes[0];
  //   // console.log(ele);
  //   const parent = event.target.parentElement.parentElement; // parent UL/OL element
  //   console.log(parent);
  //   // let i;
  //   // for (i = 0; i < parent.childNodes.length; i++) {
  //   //   if (event.target.parentElement === parent.childNodes[i]) break;
  //   // }
  //   const tooltip = document.getElementById("cardInfo");
  //   tooltip.style.visibility = "visible";

  //   const tips = document.getElementById("id");
  //   tips.innerHTML = parent;

  //   tooltip.appendChild(tips);
  //   tooltip.style.visibility = "visible";
  // }
  // function cardMouseOutHandler(event) {
  //   const tooltip = document.getElementById("cardInfo");
  //   tooltip.style.visibility = "hidden";
  //   //console.log(event.target);
  // }

  return (
    <div>
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
        {allRecipes.length > 0 ? (
          <div className={styles.cardRecipeContainer}>
            {recipes?.map((element, index) => {
              return (
                <div
                  key={`card${index}`}
                  className={styles.containerCard_indiv}
                >
                  <div
                    onMouseEnter={cardMouseOverHandler}
                    onMouseLeave={cardMouseOutHandler}
                  >
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
        <div id="cardInfo" className={styles.cardInfo}>
          <Tooltips />
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

        <div className={styles.containerFooter}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
