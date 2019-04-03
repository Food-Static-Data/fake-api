const staticData = require('@groceristar/sd-wrapper')

const fs = require("fs");
const { promisify } = require("util");

const writeFilePromisify = promisify(fs.writeFile);

async function main() {
    await writeFilePromisify(
      "./app/selectors/users.json",
      JSON.stringify(staticData.users)
  );

    console.info("file created successfully with promisify and async/await!");
}

function writeFile(){
    main().catch(error => console.error(error));
}

module.exports = {
    writeFile
}
