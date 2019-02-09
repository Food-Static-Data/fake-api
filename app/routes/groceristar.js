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
   getSGroceryCollection,
   getSAllGrocery,
   getSGroceryDataFromId,
   getSGroceriesWithDepIngKey,
   getSFirstFiveRecipes
 } = require('../selectors/selector')


const getRoutes = function(app, db) {
  app.get('/hello', (req, res) => {
    res.send('Hello')
  });
};

const getDepartmentsClean = function(app, db) {
  app.get('/departments/all', (req, res) => {
    res.send( getSDepartments() ) // this works only becase send automatically understand that we have an array or object here
  })
}

//***
const getGroceryById = function(app, db) {
  app.get('/grocery/:id/', (req, res) => {
    const result = getSGroceryById(parseInt(req.params.id, 10));
    res.send(result)
  });

};

const getFullGrocery = function(app, db) {
  app.get('/grocery/name/:name', (req, res) => {
    // console.log(req.body)
    const result = getSFullGrocery(req.params.name);
    res.send(result)
  });

};

const getAllGrocery = function(app, db) {
  app.get('/grocery-all', (req, res) => {
    const result = getSAllGrocery();
    res.send(result)
  });

};

const getGroceryDataFromId = function(app, db) {
  app.get('/grocery/data/:id/', (req, res) => {
    let id = parseInt(req.params.id, 10);
    const result =  getSGroceryDataFromId(id);
    res.send(result)
  });
};

const getGroceriesWithDepIngKey = function(app, db) {
  app.get('/groceries', (req, res) => {
    const result = getSGroceriesWithDepIngKey();
    res.send(result)
  });
};

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


const getStatus = function(app, db) {
  app.get('/status', (req, res) => {
      res.status(200).send({ date: new Date() })
  })
}

module.exports  = {
  getGroceryById,
  getFullGrocery,
  getGroceryDataFromId,
  getAllGrocery,
  getRoutes,

  getDepartmentsClean,
  getGroceriesWithDepIngKey,

  getStatus,

}
