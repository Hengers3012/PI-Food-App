const allDataAPI = require("./Data_API.js");
const allDataBDD = require("./Data_BDD.js");

const allData_Info = async function () {
  try {
    const apiData = await allDataAPI();
    const dbbData = await allDataBDD();

    const allDataContainer = apiData.concat(dbbData);

    return allDataContainer;
  } catch (err) {
    console.log(err);
  }
};

module.exports = allData_Info;
