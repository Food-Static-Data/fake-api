const { getSFirstFiveRecipes } = require('../selectors/selector')

const getFirstFiveRecipes = function (app, db) {
  app.get('/ck/firstfivefecipes', (req, res) => {
    const result = getSFirstFiveRecipes()
    res.send(result)
  })
}

module.exports = {
  getFirstFiveRecipes
}
