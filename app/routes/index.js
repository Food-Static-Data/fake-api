const { getRoutes } = require('./routes');

module.exports = function(app, db) {
  getRoutes(app, db);
  // Other route groups could go here, in the future
};
