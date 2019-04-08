<template>
  <div id="app">
    <SphericalImage ref="image" :textures="this.textures"/>
    <div id="ui">
      <button @click="next">next</button>
    </div>
  </div>
</template>

<script>
import SphericalImage from '../src/SphericalImage'
// import SphericalImage from 'vue-sphericalimage'
export default {
  components: {
    SphericalImage
  },

  props: {
    textures: {
      type: Array,
      required: true
    }
  },

  methods: {
    next() {
      this.$refs.image.next()
    }
  }
}
</script>


<style lang="scss">
#ui {
  position: absolute;
  top: 0; left: 0;
}
</style>
