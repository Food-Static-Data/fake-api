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

function writeFile(){
    
    var path = "./app/selectors/users.json";
    var data = staticData.users;
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

module.exports = {
    writeFile
}
