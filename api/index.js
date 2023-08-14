//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const server = require("./src/app.js");
// const { conn } = require("./src/db.js");

// // Syncing all the models at once.
// conn.sync({ force: true }).then(() => {
//   server.listen(3001, () => {
//     console.log("%s listening at 3001"); // eslint-disable-line no-console
//   });
// });

require("dotenv").config();
const server = require("./src/app.js");
const { conn, Diet } = require("./src/db.js");
const getDataDiets = require("./src/Data/Data_Diets.js");
const { PORT } = process.env;

const dietsBDD = async function () {
  const dietsAPI = await getDataDiets();
  try {
    dietsAPI.forEach((diet) => {
      Diet.findOrCreate({
        where: {
          name: diet,
        },
      });
    });
  } catch (err) {
    console.log(err);
  }
};

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    dietsBDD();
    console.log("%s listening at", PORT); // eslint-disable-line no-console
  });
});
