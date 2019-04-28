# npm-test-tool

> 测试工具脚手架


<a href='https://github.com/Yage-h/test-tool.git' target="_blank">项目地址</a> 

## 项目npm命令

- `npm run dev` 启动自动化测试监听
- `npm run build` 项目编译
- `npm run test` 测试
- `karma start` 执行测试用例
- `npm run lint-fix` eslint fix



<br/>

#  目录结构

<br/>

```
|-- util

    |-- lib                      # build后的文件
    |   |-- demo.js
    |   |-- index.js
    |-- src                      # 方法
    |   |-- demo.js
    |   |-- index.js
    |-- test                     # 测试用例
        |-- demo.js
    |-- .babelrc
    |-- .eslintignore
    |-- .eslintrc
    |-- .gitignore
    |-- karma.conf.js
    |-- package-lock.json
    |-- package.json
    |-- pre-commit-check.sh      # commit前校验是否每个方法都有对应测试用例
    |-- README.md
```

<br/>
<br/>

> 说明:

    1. src下每一个方法占据一个.js文件,由index.js统一导出
    2. src下每一个方法必须存在test下对应同名测试用例文件

## 涉及技术栈

- [x] [karma](https://karma-runner.github.io/latest/index.html)
- [x] [Webpack](https://webpack.github.io)
- [x] [Babel](https://babeljs.io/)


