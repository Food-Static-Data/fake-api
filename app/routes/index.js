const { getNotes } = require('./note_routes');

module.exports = function(app, db) {
  getNotes(app, db);
  // Other route groups could go here, in the future
};
