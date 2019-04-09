# react redux antd 项目模版

## react 热更新 + bable + webpack

初始化项目

```
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

```
{
  "name": "react-start",
  "version": "1.0.0",
  "description": "react redux antd start",
  "main": "index.js",
  "scripts": {
    "test": "test"
  },
  "keywords": [
    "react",
    "redux",
    "antd"
  ],
  "repository": {
    "type": "git",
    "url": "https://github.com/Acmu"
  },
  "author": "Min Yuan (https://github.com/Acmu)",
  "license": "MIT"
}
```

安装 babel

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
```

新建 _.babelrc_

```
{
  "presets": ["@babel/env", "@babel/preset-react"]
}
```

安装 Webpack

```
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
```

新建 _webpack.config.js_

```
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}
```

安装 React

这里不能安最新的 react，因为`react-hot-loader`会有警告，[说不能支持](https://github.com/gaearon/react-hot-loader/issues/1173) React 16.6+ 的内容，所以我们先用 16.5 吧

```
npm install --save react@16.5.2 react-dom@16.5.2 react-hot-loader@4.3.11
```

`src` 下新建：

_src/index.js_

```js
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))
```

_src/App.js_

```js
import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>hi react</h1>
      </div>
    )
  }
}

export default hot(module)(App)
```

_src/App.css_

```
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

这时，可以和github上的远程仓库连接一下：

```
git remote add origin git@github.com:Acmu/react-start.git
```

## 添加 eslint

首先，要在你的vscode编辑器上添加eslint插件，这样才能提示。



```

```

```

```

```

```

todo:

- eslint
-
