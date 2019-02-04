const { groceristar, showcase } = require('@groceristar/groceristar-fetch')
const departments = groceristar.getDepartments();
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




const getRoutes = function(app, db) {

  // app.post('/notes', (req, res) => {
  //   res.send('Hello')
  // });

  app.get('/hello', (req, res) => {
    // console.log(req.body)
    res.send('Hello')
  });

};

const getDepartmentsClean = function(app, db) {

  app.get('/departments/all', (req, res) => {
    res.send( departments ) // this works only becase send automatically understand that we have an array or object here
  })

}

//***
//@TODO doesn't work, return null
const getGroceryById = function(app, db) {
  app.get('/grocery/:id/', (req, res) => {
    console.log(req.params.id);
    const result = groceristar.getGroceryById(parseInt(req.params.id, 10));
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
    console.log("Collection request")
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

    let id = parseInt(req.params.id, 10);
    console.log("id" + id);

    const result =  getGroceryDataFromId2(id);

    res.send(result)
  });

};

function getGroceryDataFromId2(id){
//@TODO doesn't work, return null
  console.log(groceristar.getGroceryById(id));
  let grocery     = groceristar.getGroceryById(id)[0];
  let groceryName = grocery.name;
  let groceryWithDepAndIng = groceristar.getGroceryByNameWithDepAndIng(groceryName);
  return {
    'name': groceryName,
    'items': groceryWithDepAndIng
  };
}


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

  getDepartmentsClean,
  getGroceriesWithDepIngKey
}
