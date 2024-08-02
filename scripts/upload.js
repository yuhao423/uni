
const { input,rawlist,confirm,checkbox,select   } = require('@inquirer/prompts');


async function getUserInfo() {
    try {
      // 获取用户的名字
    //   const name = await input({ message: '开始上传吗？' });
      
      // 确认是否继续
      const confirmed = await confirm({ message: '确定开始上传吗？' });
      
      // 选择最喜欢的颜色
      const updateType = await select({
        message: '选择更新类型：',
        choices: [
            {
                name: '版本更新',
                value: '版本更新',
                description: '版本更新',
              },
              {
                name: '特性更新',
                value: '特性更新',
                description: '特性更新',
              },
              {
                name: '修订补丁',
                value: '修订补丁',
                description: '修订补丁',
              },
            //   new Separator(),
            //   {
            //     name: 'jspm',
            //     value: 'jspm',
            //     disabled: true,
            //   },
            //   {
            //     name: 'pnpm',
            //     value: 'pnpm',
            //     disabled: '(pnpm is not available)',
            //   },
        ],
      });
    //  获取最新版本号以及上传版本号：
    const version = await input({ message: `设置上传的版本号（当前的版本号：${'0.0.1'}）：`});





    //   获取用户备注
      const desc = await input({ message: '项目备注：' });
  
      // 整合所有的用户输入到一个对象中
      const userInput = {
        confirmed,
        updateType: updateType,
        version,
        desc:desc
        // favoriteFruits: fruits,
      };
  
      console.log('用户输入数据：', userInput);
    } catch (error) {
      console.error('发生错误:', error);
    }
  }
  
  getUserInfo();



