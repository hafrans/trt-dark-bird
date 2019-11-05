# DarkBird

## 环境
1. webpack 4.41.2
2. node@12.13.0
3. npm@6.12
4. cnpm@6.1.0

## 如何快速运行程序
1. git clone -b master xxxx.git
2. cnpm i (请先安装cnpm)
3. npm run dev

## 构建与运行
### build
```bash
$npm run build
```
### dev server
```bash
$npm run dev
```
## 项目说明
本项目是纯webpack工程，ui可以使用任何前端框架，项目中目前使用的是layui，前端文件使用的是ejs，样式表预处理器是scss，js使用es6

## 项目目录结构
```
  +-------------------
  |--dist (build后的目录)
  |--node_modules 
  |--src
  |   |
  |   |--assets 需要在项目中直接引用的文件
  |   |    |
  |   |    |--image
  |   |    |--style
  |   |    |--....
  |   |--pages  应用页面
  |   |    |--common 公共组件
  |   |    |    |--common-footer.html 公共页脚
  |   |    |    |--common-nav.html    公共导航
  |   |    |    |--common-page.js     公共page的js（每个页面都要导入）
  |   |    |    |--main.scss          公共css
  |   |    |    |--nav.scss           公共导航的css
  |   |    |    |--small-header.html  页面小导航栏
  |   |    |--healthExamUpload        体检信息上传
  |   |    |--healthQuestionaire      调查问卷
  |   |    |--index                   首页
  |   |    |    |--index.ejs          首页模板
  |   |    |    |--index.js           首页专用js
  |   |    |    |--index.scss         首页专用scss
  |--static 外部static文件，所有乱七八糟的放到这里
  |   |--css
  |   |--font
  |   |--images
  |   |--lay
  |   |--layui.all.js
  |   |--layui.js
  |--.gitignore
  |--package.json
  |--webpack.config.js
```
## 添加页面的规范
1. 在page里面新建一个目录，比如test,
2. 新建test.ejs, test.scss, test.js
3. 在webpack里面添加一个入口
    ```
       entry:{
           index: "./src/pages/test/test.js",
       }
    ```
4. 添加htmlwebpackplugin 项目
    ```
    new HtmlWebpackPlugin({
            filename: "test.html", //目标文件名
            template: "./src/pages/index/index.ejs", //文件模板
            hash: true,
            chunks: ['test'] //名称与entry的key对应，要不会出问题。
        }),
    ```