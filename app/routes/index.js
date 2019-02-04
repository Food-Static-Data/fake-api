const { getRoutes,
  getGroceryById,
  getGroceryCollection,
  getFullGrocery,
  getAllGrocery,
  getGroceryDataFromId,
  getGroceriesWithDepIngKey,
  getStatus,
  getDepartmentsClean
 } = require('./routes');


//@TODO tell me - does we need to pass db variable into our routes methods?

module.exports = function(app, db) {
  getRoutes(app, db);
  getGroceryById(app, db)
  getGroceryCollection(app, db)
  getFullGrocery(app, db)
  getGroceriesWithDepIngKey(app, db)
  getAllGrocery(app, db)
  getGroceryDataFromId(app, db)
  // Other route groups could go here, in the future
  getDepartmentsClean(app, db)
  getStatus(app, db)
};
