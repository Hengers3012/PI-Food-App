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
        <div>
          <div>
            <h3>Nombre:</h3>
            <input type="text" name="name" />
          </div>
          <br />
          <div>
            <h3>Dieta:</h3>
            <input type="checkbox" name="diets" />
          </div>
          <div>
            <h3>Summary</h3>
            <textarea name="summary" cols="30" rows="10" />
          </div>
        </div>
      </form>
      <div>
        <Link to="/home">BACK PAGE</Link>
      </div>
    </div>
  );
}
