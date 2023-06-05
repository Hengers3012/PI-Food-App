const { Router } = require("express");
const morgan = require("morgan");
const getRecipeInfo = require("../Controller/GetRecipes");
const getRecipeByID = require("../Controller/GetRecipes_ID");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use(morgan("dev"));

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/recipes/:idRecipe", getRecipeByID);
router.get("/recipes", getRecipeInfo);
// router.post("/recipes");
// router.get("/diets");

module.exports = router;
