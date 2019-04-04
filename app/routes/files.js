const { getFileData } = require('../selectors/readFile');
const { writeFile, writeFiles  }   = require('../selectors/writeFile');

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

const getWriteFiles = function (app, db) {
    app.get('/get-write-files', (req, res) => {
        writeFiles()
        res.send('Writed')
    })
}

module.exports = {
    getFile,
    getWriteFile,
    getWriteFiles,
}
