# angularjs-nodejs-webstrom-mongodb

根据http://www.tudou.com/programs/view/txhBUA7fcNA/?resourceId=0_06_02_99视频学习整理的例子。

其中前端设计到了angularjs，服务用的是nodejs，数据库用的是mongodb，开发工具用的是webstrom

前提是你已经安装了mongodb数据库，nodejs，如果都准备完毕后，现在我们开始吧！

例子效果：在输入框输入文字，点击按钮，会添加到一个列表项

![这里写图片描述](http://img.blog.csdn.net/20160630152420050)

1.初始化项目生成packjson.json文件  可以一直enter即可
>npm init

2.安装mongoose  用于连接，操作数据库的
>npm install mongoose --save-dev

3.安装cors 解决http跨域请求的
>npm install cors --save-dev

4.安装body-parser  用来解析http请求体的
>npm install body-parser --save-dev

5.下载angularjs
>cd public
>bower install angular


项目文件夹目录：
>server.js     //nodejs起服务的
>public        //放置静态文件
>........index.html
>........app.js
>........bower_components  //angular模块
>node_modules    //安装依赖的模块


以上代码完成后，即可执行server.js，打开index.html
