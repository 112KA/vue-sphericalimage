<template>
<div>
<canvas ref="canvas" :width="width" :height="height"></canvas>
</div>
</template>

<script>
import OrbitControls from './OrbitControls'

export default {

  props: {
    textures: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      width: 0,
      height: 0,
      /**
       * requestAnimationFrame ID
       */
      requestId: undefined,
      scene: new THREE.Scene(),
      camera: new THREE.PerspectiveCamera(),
      container: new THREE.Object3D(),
      spheres: [],
      currentSphereIndex: -1,
    }
  },
  
  mounted() {

    this.scene.add(this.container)

    //mesh

    this.textures.forEach(texture => this.addSphere(texture))


    //camera

    this.camera.position.set(0,0,1.0)
    this.camera.lookAt(this.container.position)

    //render

    this.renderer = new THREE.WebGLRenderer({
      canvas:this.$canvas,
      alpha: true
    })
    this.renderer.setClearColor(0x000000, 0)

    //control
    this.controls = new THREE.OrbitControls(this.camera,this.renderer.domElement)
    
    this.render()

    window.addEventListener('resize', this.onResize)
    this.onResize()

    this.goto(0)
  },

  destroyed() {
    cancelAnimationFrame(this.requestId)
    window.removeEventListener('resize', this.onResize)
  },
  
  computed: {
    $canvas() {
      return this.$refs.canvas
    }
  },

  methods: {
    addSphere(texture) {
      texture.minFilter=texture.magFilter=THREE.LinearFilter;
      texture.mapping=THREE.UVMapping;

      const geometry = new THREE.SphereGeometry( 5, 60, 40 )
      geometry.scale( - 1, 1, 1 )

      const material = new THREE.MeshBasicMaterial( {
          map: texture,
          transparent : true,
          opacity: 0,
      } )

      const sphere = new THREE.Mesh( geometry, material )
      this.container.add( sphere )

      this.spheres.push(sphere)
    },

    goto(sphereIndex) {
      console.log("sphereIndex", sphereIndex)
      let sphere
      if(this.currentSphereIndex !== -1) {
        sphere = this.spheres[this.currentSphereIndex]
        TweenLite.to(sphere.material, 1, {opacity:0})
      }

      sphere = this.spheres[sphereIndex]
      TweenLite.to(sphere.material, 1, {opacity:1})

      this.currentSphereIndex = sphereIndex
    },

    next() {
      const nextIndex = this.currentSphereIndex === this.spheres.length-1 ? 0 : this.currentSphereIndex+1
      this.goto(nextIndex)
    },

    prev() {
      const prevIndex = this.currentSphereIndex === 0 ? this.spheres.length-1 : this.currentSphereIndex-1
      this.goto(prevIndex)
    },

    render() {
      this.requestId = requestAnimationFrame(this.render)
      // this.sphere.rotation.y += 0.05 * Math.PI/180
      this.renderer.render(this.scene,this.camera)
      this.controls.update()
    },

    onResize() {
      this.width = this.$el.clientWidth
      this.height = this.$el.clientHeight
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize( this.width, this.height)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  //縦横サイズは親コンポーネント側で指定する
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
