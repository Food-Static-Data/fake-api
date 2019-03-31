// const fsp = require("fs/promises");
const fs = require('fs');
const test = require('./test1');

function getFileData(){
    var output = fs.readFileSync(__dirname + '/test.txt')
    // console.log(__dirname);
    console.log(test);
    
    console.log(output)
}

module.exports = {
    getFileData
}

// try {
//     await fsp.writeFile("/tmp/test5.js", "console.log('Hello world with Node.js v10 fs/promises!'");
//     console.info("File created successfully with Node.js v10 fs/promises!");
// } catch (error){
//     console.error(error);
// }