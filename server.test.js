// const express      = require('express');
// const app          = express();
//
const request = require('supertest')
const app = require('./server')

// const app = require('../../src/app')
const { groceristar, showcase } = require('@groceristar/groceristar-fetch')

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

  test('It should response the GET method getDepartmentsClean()', (done) => {
    request(app).get('/departments/all').then((response) => {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceryById()', (done) => {
    request(app).get('/grocery/1').then((response) => {
      console.log(response.statusCode)
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getFullGrocery()', (done) => {
    request(app).get('/grocery/name/Ultimate Grocery List').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceryCollection()', (done) => {
    request(app).get('/grocery-collection').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getAllGrocery()', (done) => {
    request(app).get('/grocery-all').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceryDataFromId()', (done) => {
    request(app).get('/grocery/data/1').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getFirstFiveRecipes()', (done) => {
    request(app).get('/ck-firstfivefecipes').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  })

  test('It should response the GET method getGroceriesWithDepIngKey()', (done) => {
    request(app).get('/groceries').then((response) => {
      expect(response.statusCode).toBe(200)
      done()
    })
  }, 10000)
})

describe('Test /hello', () => {
  it('Should return Hello!', async () => {
    const response = await request(app).get('/hello')
    expect(response.text).toBe('Hello')
  })

  it('Response equal getGroceryShowcase()!', async () => {
    const response = await request(app).get('/grocery-collection')
    let result = JSON.parse(response.text)
    // console.log(result);
    expect(result).toEqual(showcase.getGroceryShowcase())
  })

  test('Should respons the Get method getRoutes()', (done) => {
    request(app).get('/hello').then((response) => {
      expect(response.text).toBe('Hello')
      done()
    })
  })
})
