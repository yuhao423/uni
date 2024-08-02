
const fs = require('fs')
export function getVersion(){


    const versionInfo = fs.readFileSync('./version.config.js')
    console.log(versionInfo);
    
}