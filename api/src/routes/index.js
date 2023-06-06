const { Router } = require("express");
const getRecipeInfo = require("../Controller/GetRecipes");
const getRecipeByID = require("../Controller/GetRecipes_ID");
const createRecipe = require("../Controller/PostRecipes");
const getDiets = require("../Controller/GetDiets");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get(`/recipes`, getRecipeInfo);
router.get("/recipes/:id", getRecipeByID);
router.post("/recipes", createRecipe);

router.get("/diets", getDiets);

module.exports = router;
