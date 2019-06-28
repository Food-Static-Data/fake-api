// const express      = require('express');
// const app          = express();
//
const request = require('supertest')
const app = require('./server')

// const app = require('../../src/app')
const {
  groceristar,
  showcase
} = require('@groceristar/groceristar-fetch')

describe('Test the root path', () => {
  test('It should response the GET method getStatus()', (done) => {
    request(app).get('/status').then((response) => {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getRoutes()', (done) => {
    request(app).get('/hello').then((response) => {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200)
      done()
    })
  })

/* @TODO START. REPLACE LATER WITH CONSTANTS FOR urls */
  test('It should response the GET method getDepartmentsClean()', (done) => {
    request(app).get('/gs/get-departments-clean').then((response) => {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceryById()', (done) => {
    request(app).get('/gs/get-grocery-by-id/1').then((response) => {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getFullGrocery()', (done) => {
    request(app).get('/gs/get-full-grocery/Ultimate Grocery List').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceryCollection()', (done) => {
    request(app).get('/sh/get-grocery-collection').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getAllGrocery()', (done) => {
    request(app).get('/gs/get-all-grocery').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceryDataFromId()', (done) => {
    request(app).get('/gs/get-grocery-data-from-id/1').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getFirstFiveRecipes()', (done) => {
    request(app).get('/ck/get-first-five-recipes').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceriesWithDepIngKey()', (done) => {
    request(app).get('/gs/get-groceries-with-dep-ing-key').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  }, 10000)
})
/* END. REPLACE LATER WITH CONSTANTS FOR urls */


describe('Test /hello', () => {
  it('Should return Hello!', async () => {
    const response = await request(app).get('/hello')
    expect(response.text).toBe('Hello')
  })

  // it('Response equal getGroceryShowcase()!', async () => {
  //   const response = await request(app).get('/ck/get-first-five-recipes')
  //   let result = JSON.parse(response.text)
  //   // console.log(result);
  //   expect(result).toEqual(showcase.getGroceryShowcase())
  // })

  test('Should respons the Get method getRoutes()', (done) => {
    request(app).get('/hello').then((response) => {
      expect(response.text).toBe('Hello')
      done()
    })
  })
})
