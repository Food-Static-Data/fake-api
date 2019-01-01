const { groceristar } = require('@groceristar/groceristar-fetch')
const departments = groceristar.getDepartments();

console.log( departments );

module.exports = function(app, db) {

  // app.post('/notes', (req, res) => {
  //   res.send('Hello')
  // });

  app.get('/notes', (req, res) => {
    // console.log(req.body)
    res.send('Hello')
  });

};
