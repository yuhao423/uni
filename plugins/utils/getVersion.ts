
const fs = require('fs')
export function getVersion(){


    const versionInfo = fs.readFileSync('./version.config.json')
    console.log(versionInfo);
    
}