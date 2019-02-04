const { groceristar, showcase } = require('@groceristar/groceristar-fetch')
const departments = groceristar.getDepartments();

console.log( departments );

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

function getGroceryDataFromId2(id){
//@TODO doesn't work, return null
  console.log(getGroceryById(id));
  let grocery     = getGroceryById(id)[0];
  let groceryName = grocery.name;
  let groceryWithDepAndIng = getFullGrocery(groceryName);
  return {
    'name': groceryName,
    'items': groceryWithDepAndIng
  };
}


const getRoutes = function(app, db) {

  // app.post('/notes', (req, res) => {
  //   res.send('Hello')
  // });

  app.get('/routes', (req, res) => {
    // console.log(req.body)
    res.send('Hello')
  });

};

//***
//@TODO doesn't work, return null
const getGroceryById = function(app, db) {
  app.get('/grocery/:id/', (req, res) => {

    const result = groceristar.getGroceryById();
    res.send(result)
  });

};

const getFullGrocery = function(app, db) {
  app.get('/grocery/name/:name', (req, res) => {
    // console.log(req.body)
    const result = groceristar.getGroceryByNameWithDepAndIng(req.params.name);
    res.send(result)
  });

};

const getGroceryCollection = function(app, db) {
  app.get('/grocery-collection', (req, res) => {

    const result = showcase.getGroceryShowcase()
    res.send(result)
  });

};

const getAllGrocery = function(app, db) {
  app.get('/grocery-all', (req, res) => {

    const result = groceristar.getAllGrocery();
    res.send(result)
  });

};

const getGroceryDataFromId = function(app, db) {
app.get('/grocery/data/:id/', (req, res) => {
    // res.send('Hello')
    const result = groceristar.getGroceryDataFromId(req.params.id);
    res.send(result)
  });

};

const getGroceriesWithDepIngKey = function(app, db) {
  app.get('/groceries', (req, res) => {
    const result = groceristar.getGroceriesWithDepIngKey();
    res.send(result)
  });
};
//
// const getNotes = function(app, db) {
//
//   app.get('/notes', (req, res) => {
//     // console.log(req.body)
//     res.send('Hello')
//   });
//
// };
//
// const getNotes = function(app, db) {
//
//   app.get('/notes', (req, res) => {
//     // console.log(req.body)
//     res.send('Hello')
//   });
//
// };
//
// const getNotes = function(app, db) {
//
//   app.get('/notes', (req, res) => {
//     // console.log(req.body)
//     res.send('Hello')
//   });
//
// };
//
// const getNotes = function(app, db) {
//
//   app.get('/notes', (req, res) => {
//     // console.log(req.body)
//     res.send('Hello')
//   });
//
// };



module.exports  = {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId,
  getGroceryCollection,
  getAllGrocery,
  getRoutes,
  getGroceriesWithDepIngKey
}
