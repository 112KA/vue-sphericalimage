# vue-sphericalimage
Vue component - Display, switch, drag operation of 360 panoramic image

## Example
https://112ka.github.io/example/vue-sphericalimage/

## Install

### Import dependencies
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenLite.min.js"></script>
```

### Install component
```html
<script src="vue-sphericalimage.umd.js"></script>
<script>
Vue.use(SphericalImage)
</script>
```

or

```
yarn add vue-sphericalimage
or
npm install vue-sphericalimage
```

```js
import SphericalImage from 'vue-sphericalimage'
Vue.use(SphericalImage)
```

## Usage
```js :main.js
//Load three.js textures
const loadTexture = (url) => {
  const loader = new THREE.TextureLoader()
  loader.crossOrigin = '*';
  return new Promise(resolve => {
    loader.load(url, texture => resolve(texture))
  })
}
  
let arr = [
  loadTexture('image/360 miami south pointe - 1280x640.jpg'),
  loadTexture('image/360 pier 39 carroussel sf - 1280x640.jpg'),
  loadTexture('image/360 view ocean - 1280x610.jpg'),
]
  
Promise.all(arr).then(
  new Vue({
    render: h => h(App, {
      props: {
        textures: textures
      }
    }),
  }).$mount("#app");
)
```
```vue :App.vue
//And set 'textures' props
<template>
    <SphericalImage :textures="textures"/>
</template>
```

## Licensing

MIT
