# Using Jquery + Bootstrap + FontAwesome in Vue

> A Vue.js project. Jquery + Bootstrap + FontAwesome

- [Using Jquery](#jquery)
- [Using Bootstrap](#bootstrap)
- [Using FontAwesome](#fontawesome)

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

<br/>

<a name="jquery"></a>
## Work contents (Jquery)
#### 1. vue init
```
vue init webpack-simple
```
#### 2. npm install
```
npm install
```
#### 3. npm install jquery
```
npm install jquery --save
```
#### 4. main.js
```javascript
import $ from 'jquery'
window.$ = $;
```
#### 4. webpack.config.js
```javascript
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
      // ...
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      }) 
      // ...
  ])
}
```

#### Precautions
- jquery selector로 HTML 태그를 접근할 수 있는 시점은 mounted 훅이다. 

<br/>

<a name="bootstrap"></a>
## Work contents (Bootstrap)
#### 1. npm install Bootstrap
```
npm install bootstrap popper.js --save
```
#### 2. main.js
```javascript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```
#### Precautions
bootstrap npm을 통해 설치할 때 popper.js를 함께 설치해야한다.

<br/>

<a name="fontawesome"></a>
## Work contents (FontAwesome)
- [Vue.js | Font Awesome](https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs)
- [npm @fortawesome/vue-fontawesome](https://www.npmjs.com/package/@fortawesome/vue-fontawesome) 

#### 1. npm install vue-fontawesome
```
npm i --save @fortawesome/fontawesome-svg-core 
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/vue-fontawesome
```

#### 2. main.js
```javascript
/**
 * fontAwesome
 * faBell : icon prefix+iconName camelcase
 * prefix
 * - fas : solid style
 * - far : regular style
 */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell as fasBell} from '@fortawesome/free-solid-svg-icons'
import { faBell as farBell} from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(farBell, fasBell)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
```

#### 3. Use font-awesome
```html
<!--solid style-->
<font-awesome-icon icon = "bell"/> 
<font-awesome-icon :icon = "[ 'fas', 'bell']"/>  <!-- Same as above -->
<!--regular style-->
<font-awesome-icon :icon = "[ 'far', 'bell']"/>
```
