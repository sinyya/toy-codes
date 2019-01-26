# vue_code_scaffolding

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Work contents

#### 1. install
```angular2
npm install -g vue vue-cli
```

#### 2. vue init
```angular2
vue init webpack-simple
```    

#### 3. npm install
```angular2
npm install
```

#### 4.  npm install vue-router
```angular2
npm install vue-router --save
```

#### 5. vue-router mode
Changed vue-router mode to 'history mode'

#### 6. babel-plugin-syntax-dynamic-import
Dynamic Import를 사용하기 위한 두가지 방법 중 require.ensure 방식이 아닌 import 방식을 사용할 경우 바벨 플러그인을 사용해야한다.   
웹팩에서 지원하는 babel-plugin-syntax-dynamic-import를 설치한다.
[babel-plugin-syntax-dynamic-import](https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import/#installation)   
```angular2
npm install babel-plugin-syntax-dynamic-import --save-dev
```
.babelrc       
```angular2
  "plugins": [
    "babel-plugin-syntax-dynamic-import"
  ]
```
