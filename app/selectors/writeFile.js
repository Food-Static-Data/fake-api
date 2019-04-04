const staticData = require('@groceristar/sd-wrapper')

const fs = require("fs");
const { promisify } = require("util");

const writeFilePromisify = promisify(fs.writeFile);

async function main(path, data) {
    
    await writeFilePromisify(
      path, data
  );

    console.info("file created successfully!");
}
/**
 * Write in file
 * @param {String} path 
 * @param {Object} data 
 */
function writeFile(path, data){
    
    // var dataStr = JSON.stringify(users);
    // console.log(typeof users);
    // console.log(typeof usersStr);
    if (typeof data != 'undefined'){
        if ((typeof data) == 'object'){
            var dataStr = JSON.stringify(data);
            
            if (typeof dataStr == 'string'){
                main(path, dataStr).catch(error => console.error(error));

            } else {
                console.error("Error occured after stringify or variabe has another type not string")
            }
        }
    } else {
        console.error("Error variable is undefined")
    }
}

function writeFiles(){
    // add filenames to array that exist in sd-wrapper
    // output filenames will be the same as in array
    // files you can find in folder output
    var fileNames = ["users", "userGrocery", "items"]
    
    fileNames.map( fileName => {
        var path = "./app/selectors/output/" + fileName + ".json";
        var data = staticData[fileName]
        
        writeFile(path, data)
    })
    
}
module.exports = {
    writeFile, 
    writeFiles
}
