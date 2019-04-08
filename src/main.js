import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
// Vue.use(SphericalImage)

const THREE = window.THREE

const loadTexture = (url) => {
  const loader = new THREE.TextureLoader()
  loader.crossOrigin = '*';
  return new Promise(resolve => {
    loader.load(url, texture => resolve(texture))
  })
}

window.addEventListener('load', () => {
  
  let arr = [
    loadTexture('image/360 miami south pointe - 1280x640.jpg'),
    loadTexture('image/360 pier 39 carroussel sf - 1280x640.jpg'),
    loadTexture('image/360 view ocean - 1280x610.jpg'),
  ]
  
  Promise.all(arr).then(textures => {
  
    new Vue({
      render: h => h(App, {
        props: {
          textures: textures
        }
      }),
    }).$mount("#app");
  
  
  })
});

