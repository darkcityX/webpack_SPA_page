## webpack_SPA_page

    基于webpack构建的单页应用模板

### 一、安装的模块
 - webpack类

    - webpack、webpack-cli、webpack-dev-server

 - 样式类

    - css-loader、style-loader
    - postcss-loader、autoprefixer
    - less-loader、less

 - 文件类

    - file-loader、url-loader

 - ES6编译

    - babel-loader、@babel/core、@babel/preset-env

 - HTML生成
    
    - html-webpack-plugin

 - 代码质量管理
 
    - eslint、eslint-loader
    - stylelint、stylelint-webpack-plugin、styleline-config-standard

 - 测试
    
    - jest jest-webpack

### 二、目录结构

```

    config/            #配置
        webpack.production.js       #生产配置——build
        webpack.development.js      #开发配置——start
        webpack.test.js             #测试配置——test

    src/               #源码
        js/
        less/
        css/
        imgs/
        index.js

    tests/             #测试用例
    webpack.config.js  #通用配置
    .eslintrc.js       #代码风格配置 

```

