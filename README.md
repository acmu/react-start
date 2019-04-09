# React Redux Antd 项目模版

近期要写一个 Oning Judge 的前端项目，所以学习一下创建 React 项目。

## React 热更新 + Bable + Webpack

初始化项目

```shell
npm init -y

git init
```

添加 `.gitignore`

```
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

新建目录 `public` `src`

_public/index.html_

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>React Starter</title>
  </head>

  <body>
    <div id="root"></div>
    <noscript>
      You need to enable JavaScript to run this app.
    </noscript>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```

_package.json_

```json
{
  "name": "react-start",
  "version": "1.0.0",
  "description": "react redux antd start",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "keywords": ["react", "redux", "antd"],
  "repository": {
    "type": "git",
    "url": "https://github.com/Acmu"
  },
  "author": "Min Yuan (https://github.com/Acmu)",
  "license": "MIT"
}
```

安装 babel

```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

新建 _.babelrc_

```json
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

安装 Webpack

```shell
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
```

新建 _webpack.config.js_

```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
```

安装 React

这里不能安最新的 react，因为`react-hot-loader`会有警告，[说不能支持](https://github.com/gaearon/react-hot-loader/issues/1173) React 16.6+ 的内容，所以我们先用 16.5 吧

```shell
npm install --save react@16.5.2 react-dom@16.5.2 react-hot-loader@4.3.11
```

`src` 下新建：

_src/index.js_

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

_src/App.js_

```js
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hi react</h1>
      </div>
    );
  }
}

export default hot(module)(App);
```

_src/App.css_

```css
.App {
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
}
```

`package.json`中的 `scripts` 为：

```json
"scripts": {
  "dev": "webpack-dev-server --mode development",
  "build": "webpack --mode production"
},
```

运行 `npm run dev` ，修改 `App.js` 文件，测试热更新

至此，我们的 react app 搭建起来了，并且也可以热更新了。

这时，可以和 github 上的远程仓库连接一下：

```
git remote add origin git@github.com:Acmu/react-start.git

git pull

git remote -v

git branch

git branch --set-upstream-to=origin/master master

git pull origin master --allow-unrelated-histories 强制关联本地和远程库
```

## 添加 Eslint

首先，要在你的 vscode 编辑器上添加 eslint 插件，这样才能提示。

```
npm install --save-dev eslint eslint-plugin-react
```

`ls -la node_modules/.bin/` 可以看到本地安装的命令，这时可以用 `npx <cmd>` 来执行命令。

`ls public/*` 可以看到 `public` 下所有文件和目录

比如这段代码：

```
function add(a, b) {
  return a + c;
}
```

没开 eslint 之前是不会报错的，所以我们打开 eslint

```
npx eslint --init
```

这里有些选择，按照你的情况选就好，我选的如下：

```
$ npx eslint --init
? How would you like to use ESLint? To check syntax and find problems
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Where does your code run? (Press <space> to select, <a> to toggle all, <i> to invert selection)Browser
? What format do you want your config file to be in? JavaScript
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest
? Would you like to install them now with npm? No
```

或者也可以直接新建 `.eslintrc.js` 内容如下：

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // 缩进 2 个空格
    indent: ['error', 2],
    // 总是使用单引号
    quotes: ['error', 'single'],
    // 总是加分号
    semi: ['error', 'always'],
    // 总是多行的时候加逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 操作符之间加空格
    'space-infix-ops': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
};
```

`extends: ['plugin:react/recommended']` 设置了之后， React 导入但没使用，就[不会报错了](https://stackoverflow.com/questions/42541559/eslint-with-react-gives-no-unused-vars-errors)。

这时可以进入 vscode 设置，搜索 `eslint` 找到 `Eslint: Auto Fix On Save` 打开，就可以在保存时自动修复。

还可以直接写一个 `t.js` 把代码放进去，直接就能看到 eslint 的效果了，如下：

```
/*eslint comma-dangle: ["error", "always-multiline"]*/

var foo = {
    bar: "baz",
    qux: "quux",
};

var foo = {bar: "baz", qux: "quux"};
var arr = [1,2];

var arr = [1,
    2];

var arr = [
    1,
    2,
];

foo({
  bar: "baz",
  qux: "quux",
});
```

最后还可以添加 `[prettier](https://prettier.io/)` ，这是一个代码格式化的工具，先下 vscode 的 prettier 插件，之后添加配置文件 `.prettierrc`

```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all"
}
```

这时，快捷键 `shift + alt + f` 就可以按照配置文件格式化代码。

## 添加 Ant Design

## 添加 Redux

```

```

```

```

```

```

```

```
