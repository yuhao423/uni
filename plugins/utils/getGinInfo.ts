const {execSync} = require('child_process')

export function getGitBranch(){
   
    try {
        return execSync('git symbolic-ref --short -q HEAD').toString().trim();
    } catch (error) {
        console.log('获取分支失败',error);
        return null
    }

}