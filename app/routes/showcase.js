const { getSGroceryCollection } = require('../selectors/selector')

const getGroceryCollection = function(app, db) {
  app.get('/grocery/collection', (req, res) => {
    const result = getSGroceryCollection()
    res.send(result)
  });
};

module.exports = {
  getGroceryCollection
}
