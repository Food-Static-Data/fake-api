// const collection  = groceristar.getGroceryShowcase();
// console.log()
// console.log( departments );

// function getGroceryById( id ) {
//   return groceristar.getGroceryById(id);
// }

// function getFullGrocery( name ) {
//   return groceristar.getGroceryByNameWithDepAndIng(name);
// }
//
// function getGroceryCollection(){
//   return groceristar.getGroceryShowcase();
// }

// function getAllGrocery(){
//   return groceristar.getAllGrocery();
// }
const { getSDepartments,
  getSGroceryById,
  getSFullGrocery,
  getSAllGrocery,
  getSGroceryDataFromId,
  getSGroceriesWithDepIngKey,
  getSAllIngredientsByOneDepartmentKey
} = require('../selectors/selector')

const getRoutes = function (app, db) {
  app.get('/hello', (req, res) => {
    res.send('Hello')
  })
}

const getAllGrocery = function (app, db) {
  app.get('/gs/get-all-grocery', (req, res) => {
    // console.log('grocery All')
    const result = getSAllGrocery()
    res.send(result)
  })
}

const getDepartmentsClean = function (app, db) {
  app.get('/gs/get-departments-clean', (req, res) => {
    res.send(getSDepartments()) // this works only becase send automatically understand that we have an array or object here
  })
}

//* **

const getGroceryById = function (app, db) {
  app.get('/gs/get-grocery-by-id/:id/', (req, res) => {
    const result = getSGroceryById(parseInt(req.params.id, 10))
    res.send(result)
  })
}

const getFullGrocery = function (app, db) {
  app.get('/gs/get-full-grocery/:name', (req, res) => {
    // console.log(req.body)
    const result = getSFullGrocery(req.params.name)
    res.send(result)
  })
}

const getGroceryDataFromId = function (app, db) {
  app.get('/gs/get-grocery-data-from-id/:id/', (req, res) => {
    let id = parseInt(req.params.id, 10)
    const result = getSGroceryDataFromId(id)
    res.send(result)
  })
}

const getGroceriesWithDepIngKey = function (app, db) {
  app.get('/gs/get-groceries-with-dep-ing-key', (req, res) => {
    const result = getSGroceriesWithDepIngKey()
    res.send(result)
  })
}

const getAllIngredientsByOneDepartmentKey = function (app, db) {
  app.get('/gs/get-all-ingredients-by-one-department-key/:department/:groceryId', (req, res) => {
    let id = parseInt(req.params.groceryId,10)
    const result = getSAllIngredientsByOneDepartmentKey(req.params.department, id)
    res.send(result)
  })
}
// chickenKyiv

// const getNotes = function(app, db) {
//
//   app.get('/notes', (req, res) => {
//     // console.log(req.body)
//     res.send('Hello')
//   });
//
// };
//

const getStatus = function (app, db) {
  app.get('/status', (req, res) => {
    res.status(200).send({ date: new Date() })
  })
}

module.exports = {
  getAllGrocery,
  getDepartmentsClean,
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId,
  getGroceriesWithDepIngKey,
  getAllIngredientsByOneDepartmentKey,

  getRoutes,
  getStatus
}
