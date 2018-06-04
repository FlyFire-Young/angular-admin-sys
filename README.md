# angular-admin-sys #
基于angular + ng-zorro-antd + antv 的后台管理系统解决方案。
## 前言 ##
angular + ng-zorro-antd + antv组件库的后台管理系统。

## 功能 ##
- [x] 首页
- [x] UI
- [x] 表格
- [x] 图表
- [x] 弹出框
- [x] 富文本
- [x] ngstore

## 目录结构介绍 ##

	|-- config                                                            // webpack配置文件
	|-- e2e                                                               // 测试
	|-- src                                                               // 源码目录
	|   |-- app                                                           // 源文件
	||-- assets                   	                                    // static文件
	||-- components                   	                                // 组件
	||-- contents                 	                                    // 配置文件
	||-- environments                  	                              // 源文件
	||-- ngrxStore                 	                                  // ngstore
	|   |-- router                                                        // 路由
	|   |-- utils                                                         // 跨域请求util
	|   |-- favicon.ico                                                   // ico
	|   |-- index.html                                                    // 源文件
	|   |-- main.ts                                                       // 入口文件
	|   |-- module.ts                                                     // 总moudle
	|   |-- polyfills.ts                                                  // 源文件
	|   |-- styles.css                                                    // 源文件
	|   |-- test.ts                                                       // 源文件
	|   |-- tsconfig.app.json                                             // 源文件
	|   |-- tsconfig.spec.json                                            // 源文件
	|   |-- typings.d.ts                                                  // 源文件
	|   |-- urlresolver.ts                                                // 源文件
	|-- .angular-cli.json                                                 // 源文件
	|-- .editorconfig                                                     // 源文件
	|-- .gitignore                                                        // 源文件
	|-- karma.conf.js                                                     // 源文件
	|-- package.json                                                      // 依赖
	|-- package-lock.json                                                 // 依赖
	|-- protractor.conf.js                                                // 源文件
	|-- proxy.config.json                                                 // 跨域请求代理
	|-- README.md                                                         // 说明
	|-- tsconfig.json                                                     // 源文件
	|-- tslint.json                                                       // 源文件

	

## 安装步骤 ##

	git clone https://github.com/FlyFire-Young/angular-admin-sys.git      // 把模板下载到本地
	cd angular-admin-sys                                                  // 进入模板目录
	npm install @angular/cli                    //注：在安装前必须保证node及npm已经安装成功，以及全局安装@angular/cli
	npm install   

## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:4201
	npm run start

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build

