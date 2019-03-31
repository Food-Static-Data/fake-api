const { getFileData } = require('../selectors/readFile');

const getFile = function (app, db) {
    app.get('/get-file', (req, res) => {
        getFileData()
        res.send('Readed')
    })
}

module.exports = {
    getFile
}