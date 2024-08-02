
const versionRegex = /^([1-9]\d|[1-9])(.([1-9]\d|\d)){2}$/

export function testVersion(str:string){
    return versionRegex.test(str)
}