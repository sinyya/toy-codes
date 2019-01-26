# Syntax dynamic import with babel plugin

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## babel-plugin-syntax-dynamic-import
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
webpack.config.js
```
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(__dirname, 'src'),
    },
    extensions: ['*', '.js', '.vue', '.json']
},
```

## Work contents
'@'를 src폴더로 지정해 전역 경로로 표기할 수 있다.

ex) '@/components/Home.vue'
