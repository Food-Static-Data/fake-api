const { getRoutes,
  getGroceryById,
  getFullGrocery,
  getAllGrocery,
  getGroceryDataFromId,
  getGroceriesWithDepIngKey,
  getStatus,
  getDepartmentsClean,
} = require('./groceristar');

const { getFirstFiveRecipes }  = require('./chickenKyiv');
const { getGroceryCollection } = require('./showcase');



//@TODO tell me - does we need to pass db variable into our routes methods?
module.exports = function(app, db) {
  // groceristar
  getRoutes(app, db);
  getGroceryById(app, db)
  getFullGrocery(app, db)
  getGroceriesWithDepIngKey(app, db)
  getAllGrocery(app, db)
  getGroceryDataFromId(app, db)
  // Other route groups could go here, in the future
  getDepartmentsClean(app, db)
  getStatus(app, db)
  // showcase
  getGroceryCollection(app, db)
  // chickenKyiv
  getFirstFiveRecipes(app, db)
};
