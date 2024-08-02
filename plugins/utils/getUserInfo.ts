
const { input,rawlist,confirm,checkbox,select   } = require('@inquirer/prompts');


export async function getUserInfo() {
    try {
      // 获取用户的名字
      const name = await input({ message: '请输入你的名字：' });
      
      // 确认是否继续
      const confirmed = await confirm({ message: '你确定要继续吗？' });
      
      // 选择最喜欢的颜色
      const color = await select({
        message: '选择你最喜欢的颜色：',
        choices: ['红色', '绿色', '蓝色'],
      });
  
      // 选择喜欢的水果
      const fruits = await checkbox({
        message: '选择你喜欢的水果：',
        choices: ['苹果', '香蕉', '樱桃', '枣'],
      });
  
      // 整合所有的用户输入到一个对象中
      const userInput = {
        name,
        confirmed,
        favoriteColor: color,
        favoriteFruits: fruits,
      };
  
      console.log('用户输入数据：', userInput);
    } catch (error) {
      console.error('发生错误:', error);
    }
  }
  
  getUserInfo();



