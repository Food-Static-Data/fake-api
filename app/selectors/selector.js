const { groceristar,
  chickenKyiv,
  showcase,
  gsLoopback } = require('@groceristar/groceristar-fetch')

function getSDepartments (id) {
  return groceristar.getDepartments()
}

function getSGroceryById (id) {
  return groceristar.getGroceryById(id)
}

function getSFullGrocery (name) {
  return groceristar.getGroceryByNameWithDepAndIng(name)
}

function getSAllGrocery () {
  return groceristar.getAllGrocery()
}

function getSGroceriesWithDepIngKey () {
  return groceristar.getGroceriesWithDepIngKey()
}

function getSGroceryDataFromId (id) {
  let grocery = getSGroceryById(id)[0]
  let groceryName = grocery.name
  let groceryWithDepAndIng = getSFullGrocery(groceryName)
  return {
    'name': groceryName,
    'items': groceryWithDepAndIng
  }
}

// -----showcase------
function getSGroceryCollection () {
  return showcase.getGroceryShowcase()
}

// --------chickenKyiv-------
function getRandomRecipe () {
  return chickenKyiv.getRandomRecipe()
}

function getSFirstFiveRecipes () {
  return chickenKyiv.getFirstFiveRecipes()
}

function getShowcaseFiveRecipes () {
  return chickenKyiv.getShowcaseFiveRecipes()
}

function getFiveRandomIngredients () {
  return chickenKyiv.getFiveRandomIngredients()
}

// @TODO i don't like this name too
function getRecipeChickenKyivById (id) {
  return chickenKyiv.getRecipe()[id]
}

// GS Loopback
function getUltimateGrocery () {
  return gsLoopback.getUltimateGrocery()
};

function getGLwithUserRelations () {
  return gsLoopback.getGLwithUserRelations()
};

function getIngredientsSampleFromDB () {
  return gsLoopback.getIngredientsSampleFromDB()
};

module.exports = {
  getSGroceryById,
  getSFullGrocery,
  getSGroceryDataFromId,
  getSGroceryCollection,
  getSAllGrocery,
  getSDepartments,

  getRandomRecipe,
  getSFirstFiveRecipes,
  getFiveRandomIngredients,
  getRecipeChickenKyivById,
  getShowcaseFiveRecipes,

  getUltimateGrocery,
  getGLwithUserRelations,
  getIngredientsSampleFromDB,

  getSGroceriesWithDepIngKey
}
