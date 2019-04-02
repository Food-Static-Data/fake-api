const { getFileData } = require('../selectors/readFile');
const { writeFile } = require('../selectors/writeFile');
const getFile = function (app, db) {
    app.get('/get-file', (req, res) => {
        getFileData()
        res.send('Readed')
    })
}

const getWriteFile = function (app, db) {
    app.get('/get-write-file', (req, res) => {
        writeFile()
        res.send('Writed')
    })
}

module.exports = {
    getFile,
    getWriteFile
}