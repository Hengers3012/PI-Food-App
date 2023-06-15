import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function CreateRecipeApp() {
  const allDiets = useSelector((state) => state.Diets);
  console.log(allDiets);
  return (
    <div>
      <form>
        <h1>CREA UNA NUEVA RECETA</h1>

        <br />

        <div>
          <div>
            <h3>Name:</h3>
            <input type="text" name="name" />
          </div>

          <div>
            <h3>Diets:</h3>
            <input type="checkbox" name="diets" />
          </div>

          <div>
            <h3>Summary</h3>
            <textarea
              name="summary_of_the_dish"
              type="text"
              cols="30"
              rows="10"
            />
          </div>

          <div>
            <h3>Health Score:</h3>
            <input type="range" min="0" max="100" name="health_score" />
          </div>

          <div>
            <h3>URL Image:</h3>
            <input type="text" name="image" />
          </div>

          <div>
            <h3>Instructions:</h3>
            <textarea name="instructions" type="text" cols="30" rows="10" />
          </div>

          <br />

          <div>
            <button type="submit">CREATE RECIPE</button>
          </div>
        </div>
      </form>
      <div>
        <Link to="/home">BACK PAGE</Link>
      </div>
    </div>
  );
}
