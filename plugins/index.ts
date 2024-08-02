const { Command } = require('commander');
const { input } = require('@inquirer/prompts');
import type { PluginOption } from 'vite';
import { isProduction } from './utils';
import { getGitBranch } from './utils/getGinInfo';
import { getUserInfo } from './utils/getUserInfo';
import { execSync } from 'child_process';
import path from 'path';
interface UserOptions {
    start:boolean,
    checkGit:boolean,
    mainfenzhi?:string
}
export default function vitePluginTemplate(userOptions:UserOptions): PluginOption {
    const { checkGit = true,mainfenzhi = 'main' } = userOptions; // 默认为true，但允许用户覆盖 
  return {
    // 插件名称
    name: 'vite-plugin-template',

    // pre 会较于 post 先执行
    enforce: 'pre', // post

    // 指明它们仅在 'build' 或 'serve' 模式时调用
    apply: 'build', // apply 亦可以是一个函数

    // 1. vite 独有的钩子：可以在 vite 被解析之前修改 vite 的相关配置。钩子接收原始用户配置 config 和一个描述配置环境的变量env
    config(config, { command }) {
        // console.log(config,'command');
        
    },

    // 2. vite 独有的钩子：在解析 vite 配置后调用。使用这个钩子读取和存储最终解析的配置。当插件需要根据运行的命令做一些不同的事情时，它很有用。
    configResolved(resolvedConfig) {
        // console.log(resolvedConfig,'resolvedConfig');
        
    },

    // 4. vite 独有的钩子：主要用来配置开发服务器，为 dev-server (connect 应用程序) 添加自定义的中间件
    configureServer(server) {},

    // 18的前面. vite 独有的钩子：转换 index.html 的专用钩子。钩子接收当前的 HTML 字符串和转换上下文
    transformIndexHtml(html) {},

    // vite 独有的钩子: 执行自定义HMR更新，可以通过ws往客户端发送自定义的事件
    handleHotUpdate({ file, server }) {},

    // 3. 构建阶段的通用钩子：在服务器启动时被调用：获取、操纵Rollup选项
    options(options) {},

    // 5. 构建阶段的通用钩子：在服务器启动时被调用：每次开始构建时调用
    buildStart(options) {},

    // 构建阶段的通用钩子：在每个传入模块请求时被调用：创建自定义确认函数，可以用来定位第三方依赖
    resolveId(source, importer, options) {},

    // 构建阶段的通用钩子：在每个传入模块请求时被调用：可以自定义加载器，可用来返回自定义的内容
    load(id) {},

    // 构建阶段的通用钩子：在每个传入模块请求时被调用：在每个传入模块请求时被调用，主要是用来转换单个模块
    transform(code, id) {},

    // 构建阶段的通用钩子：在构建结束后被调用，此处构建只是代表所有模块转义完成
    buildEnd(error) {
        if(error){
            console.log('打包失败');
            return
            
        }
        
    },

    // 输出阶段钩子通用钩子：接受输出参数
    outputOptions(options) {},

    // 输出阶段钩子通用钩子：每次bundle.generate 和 bundle.write调用时都会被触发。
    renderStart(outputOptions, inputOptions) {},

    // 输出阶段钩子通用钩子：用来给chunk增加hash
    augmentChunkHash(chunkInfo) {},

    // 输出阶段钩子通用钩子：转译单个的chunk时触发。rollup输出每一个chunk文件的时候都会调用。
    renderChunk(code, chunk, options) {
      return null;
    },

    // 输出阶段钩子通用钩子：在调用 bundle.write 之前立即触发这个hook
    generateBundle(options, bundle, isWrite) {},

    // 输出阶段钩子通用钩子：在调用 bundle.write后，所有的chunk都写入文件后，最后会调用一次 writeBundle
    writeBundle(options, bundle) {},

    // 通用钩子：在服务器关闭时被调用
    closeBundle() {

        //1.判断环境和分支
        console.log(process.env.NODE_ENV);
        console.log(checkGit);

        const isPro = isProduction()

        if(!isPro){
          
            console.log('不是生产环境，禁止上传！');
            
        }
        if(checkGit ){
            //判断当前分支是不是主分支
            const branch = getGitBranch()
            if(branch){
                console.log(branch,'branch');
                // const { Command } = require('commander');
                // getUserInfo()
                const paths = path.resolve('./scripts/a.js')
                console.log(path.resolve('./scripts/a.js'));
                //  path.resolve('.././scripts/a.js')
                
                try {
                    execSync(`node ${paths}`,{ stdio: 'inherit' })
                } catch (error) {
                    console.log(error);
                    
                }

                console.log('test');
                
                }else{
                                console.log('分支不对，不上传');
                            }
                        }else{
                            
                        }
        console.log('sbsbsbsbsbs');
                        
                    },
                };

        
}
