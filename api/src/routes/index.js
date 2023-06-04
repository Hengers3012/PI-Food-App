const { Router } = require("express");
const morgan = require("morgan");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use(morgan("dev"));

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
