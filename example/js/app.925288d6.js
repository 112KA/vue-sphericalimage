(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],h=0,d=[];h<s.length;h++)i=s[h],a[i]&&d.push(a[i][0]),a[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={app:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("SphericalImage",{ref:"image",attrs:{textures:this.textures}}),n("div",{attrs:{id:"ui"}},[n("button",{on:{click:e.next}},[e._v("next")])])],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("canvas",{ref:"canvas",attrs:{width:e.width,height:e.height}})])},s=[],c=(n("e20f"),{props:{textures:{type:Array,required:!0}},data(){return{width:0,height:0,requestId:void 0,scene:new THREE.Scene,camera:new THREE.PerspectiveCamera,container:new THREE.Object3D,spheres:[],currentSphereIndex:-1}},mounted(){this.scene.add(this.container),this.textures.forEach(e=>this.addSphere(e)),this.camera.position.set(0,0,1),this.camera.lookAt(this.container.position),this.renderer=new THREE.WebGLRenderer({canvas:this.$canvas,alpha:!0}),this.renderer.setClearColor(0,0),this.controls=new THREE.OrbitControls(this.camera,this.renderer.domElement),this.render(),window.addEventListener("resize",this.onResize),this.onResize(),this.goto(0)},destroyed(){cancelAnimationFrame(this.requestId),window.removeEventListener("resize",this.onResize)},computed:{$canvas(){return this.$refs.canvas}},methods:{addSphere(e){e.minFilter=e.magFilter=THREE.LinearFilter,e.mapping=THREE.UVMapping;const t=new THREE.SphereGeometry(5,60,40);t.scale(-1,1,1);const n=new THREE.MeshBasicMaterial({map:e,transparent:!0,opacity:0}),o=new THREE.Mesh(t,n);this.container.add(o),this.spheres.push(o)},goto(e){let t;console.log("sphereIndex",e),-1!==this.currentSphereIndex&&(t=this.spheres[this.currentSphereIndex],TweenLite.to(t.material,1,{opacity:0})),t=this.spheres[e],TweenLite.to(t.material,1,{opacity:1}),this.currentSphereIndex=e},next(){const e=this.currentSphereIndex===this.spheres.length-1?0:this.currentSphereIndex+1;this.goto(e)},prev(){const e=0===this.currentSphereIndex?this.spheres.length-1:this.currentSphereIndex-1;this.goto(e)},render(){this.requestId=requestAnimationFrame(this.render),this.renderer.render(this.scene,this.camera),this.controls.update()},onResize(){this.width=this.$el.clientWidth,this.height=this.$el.clientHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)}}}),u=c,l=(n("a878"),n("2877")),h=Object(l["a"])(u,i,s,!1,null,"cb5b4744",null),d=h.exports,p={components:{SphericalImage:d},props:{textures:{type:Array,required:!0}},methods:{next(){this.$refs.image.next()}}},m=p,E=(n("5c0b"),Object(l["a"])(m,a,r,!1,null,null,null)),b=E.exports;o["a"].config.productionTip=!1;const f=window.THREE,g=e=>{const t=new f.TextureLoader;return t.crossOrigin="*",new Promise(n=>{t.load(e,e=>n(e))})};window.addEventListener("load",()=>{let e=[g("image/360 miami south pointe - 1280x640.jpg"),g("image/360 pier 39 carroussel sf - 1280x640.jpg"),g("image/360 view ocean - 1280x610.jpg")];Promise.all(e).then(e=>{new o["a"]({render:t=>t(b,{props:{textures:e}})}).$mount("#app")})})},"5c0b":function(e,t,n){"use strict";var o=n("b19e"),a=n.n(o);a.a},a878:function(e,t,n){"use strict";var o=n("c6cc"),a=n.n(o);a.a},b19e:function(e,t,n){},c6cc:function(e,t,n){},e20f:function(e,t){THREE.OrbitControls=function(e,t){this.object=e,this.domElement=void 0!==t?t:document,this.enabled=!0,this.target=new THREE.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!1,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:THREE.MOUSE.LEFT,MIDDLE:THREE.MOUSE.MIDDLE,RIGHT:THREE.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return u.phi},this.getAzimuthalAngle=function(){return u.theta},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),s=i.NONE},this.update=function(){var t=new THREE.Vector3,a=(new THREE.Quaternion).setFromUnitVectors(e.up,new THREE.Vector3(0,1,0)),r=a.clone().inverse(),m=new THREE.Vector3,E=new THREE.Quaternion;return function(){var e=n.object.position;return t.copy(e).sub(n.target),t.applyQuaternion(a),u.setFromVector3(t),n.autoRotate&&s===i.NONE&&H(R()),u.theta+=l.theta,u.phi+=l.phi,u.theta=Math.max(n.minAzimuthAngle,Math.min(n.maxAzimuthAngle,u.theta)),u.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,u.phi)),u.makeSafe(),u.radius*=h,u.radius=Math.max(n.minDistance,Math.min(n.maxDistance,u.radius)),n.target.add(d),t.setFromSpherical(u),t.applyQuaternion(r),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),h=1,!!(p||m.distanceToSquared(n.object.position)>c||8*(1-E.dot(n.object.quaternion))>c)&&(n.dispatchEvent(o),m.copy(n.object.position),E.copy(n.object.quaternion),p=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ee,!1),n.domElement.removeEventListener("mousedown",K,!1),n.domElement.removeEventListener("wheel",$,!1),n.domElement.removeEventListener("touchstart",W,!1),n.domElement.removeEventListener("touchend",J,!1),n.domElement.removeEventListener("touchmove",Q,!1),document.removeEventListener("mousemove",q,!1),document.removeEventListener("mouseup",G,!1),window.removeEventListener("keydown",B,!1)};var n=this,o={type:"change"},a={type:"start"},r={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY_PAN:4},s=i.NONE,c=1e-6,u=new THREE.Spherical,l=new THREE.Spherical,h=1,d=new THREE.Vector3,p=!1,m=new THREE.Vector2,E=new THREE.Vector2,b=new THREE.Vector2,f=new THREE.Vector2,g=new THREE.Vector2,v=new THREE.Vector2,y=new THREE.Vector2,w=new THREE.Vector2,T=new THREE.Vector2;function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function O(){return Math.pow(.95,n.zoomSpeed)}function H(e){l.theta-=e}function P(e){l.phi-=e}var x=function(){var e=new THREE.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),d.add(e)}}(),j=function(){var e=new THREE.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),d.add(e)}}(),S=function(){var e=new THREE.Vector3;return function(t,o){var a=n.domElement===document?n.domElement.body:n.domElement;if(n.object.isPerspectiveCamera){var r=n.object.position;e.copy(r).sub(n.target);var i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),x(2*t*i/a.clientHeight,n.object.matrix),j(2*o*i/a.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(x(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),j(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(e){n.object.isPerspectiveCamera?h/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){n.object.isPerspectiveCamera?h*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function C(e){m.set(e.clientX,e.clientY)}function A(e){y.set(e.clientX,e.clientY)}function k(e){f.set(e.clientX,e.clientY)}function N(e){E.set(e.clientX,e.clientY),b.subVectors(E,m).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;H(2*Math.PI*b.x/t.clientHeight),P(2*Math.PI*b.y/t.clientHeight),m.copy(E),n.update()}function D(e){w.set(e.clientX,e.clientY),T.subVectors(w,y),T.y>0?L(O()):T.y<0&&M(O()),y.copy(w),n.update()}function I(e){g.set(e.clientX,e.clientY),v.subVectors(g,f).multiplyScalar(n.panSpeed),S(v.x,v.y),f.copy(g),n.update()}function z(e){}function F(e){e.deltaY<0?M(O()):e.deltaY>0&&L(O()),n.update()}function V(e){var t=!1;switch(e.keyCode){case n.keys.UP:S(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:S(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:S(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:S(-n.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),n.update())}function U(e){m.set(e.touches[0].pageX,e.touches[0].pageY)}function Y(e){if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);y.set(0,a)}if(n.enablePan){var r=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(r,i)}}function Z(e){E.set(e.touches[0].pageX,e.touches[0].pageY),b.subVectors(E,m).multiplyScalar(n.rotateSpeed);var t=n.domElement===document?n.domElement.body:n.domElement;H(2*Math.PI*b.x/t.clientHeight),P(2*Math.PI*b.y/t.clientHeight),m.copy(E),n.update()}function _(e){if(n.enableZoom){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+o*o);w.set(0,a),T.set(0,Math.pow(w.y/y.y,n.zoomSpeed)),L(T.y),y.copy(w)}if(n.enablePan){var r=.5*(e.touches[0].pageX+e.touches[1].pageX),i=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(r,i),v.subVectors(g,f).multiplyScalar(n.panSpeed),S(v.x,v.y),f.copy(g)}n.update()}function X(e){}function K(e){if(!1!==n.enabled){switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case n.mouseButtons.LEFT:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;k(e),s=i.PAN}else{if(!1===n.enableRotate)return;C(e),s=i.ROTATE}break;case n.mouseButtons.MIDDLE:if(!1===n.enableZoom)return;A(e),s=i.DOLLY;break;case n.mouseButtons.RIGHT:if(!1===n.enablePan)return;k(e),s=i.PAN;break}s!==i.NONE&&(document.addEventListener("mousemove",q,!1),document.addEventListener("mouseup",G,!1),n.dispatchEvent(a))}}function q(e){if(!1!==n.enabled)switch(e.preventDefault(),s){case i.ROTATE:if(!1===n.enableRotate)return;N(e);break;case i.DOLLY:if(!1===n.enableZoom)return;D(e);break;case i.PAN:if(!1===n.enablePan)return;I(e);break}}function G(e){!1!==n.enabled&&(z(e),document.removeEventListener("mousemove",q,!1),document.removeEventListener("mouseup",G,!1),n.dispatchEvent(r),s=i.NONE)}function $(e){!1===n.enabled||!1===n.enableZoom||s!==i.NONE&&s!==i.ROTATE||(e.preventDefault(),e.stopPropagation(),n.dispatchEvent(a),F(e),n.dispatchEvent(r))}function B(e){!1!==n.enabled&&!1!==n.enableKeys&&!1!==n.enablePan&&V(e)}function W(e){if(!1!==n.enabled){switch(e.preventDefault(),e.touches.length){case 1:if(!1===n.enableRotate)return;U(e),s=i.TOUCH_ROTATE;break;case 2:if(!1===n.enableZoom&&!1===n.enablePan)return;Y(e),s=i.TOUCH_DOLLY_PAN;break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(a)}}function Q(e){if(!1!==n.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===n.enableRotate)return;if(s!==i.TOUCH_ROTATE)return;Z(e);break;case 2:if(!1===n.enableZoom&&!1===n.enablePan)return;if(s!==i.TOUCH_DOLLY_PAN)return;_(e);break;default:s=i.NONE}}function J(e){!1!==n.enabled&&(X(e),n.dispatchEvent(r),s=i.NONE)}function ee(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",ee,!1),n.domElement.addEventListener("mousedown",K,!1),n.domElement.addEventListener("wheel",$,!1),n.domElement.addEventListener("touchstart",W,!1),n.domElement.addEventListener("touchend",J,!1),n.domElement.addEventListener("touchmove",Q,!1),window.addEventListener("keydown",B,!1),this.update()},THREE.OrbitControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.OrbitControls.prototype.constructor=THREE.OrbitControls,Object.defineProperties(THREE.OrbitControls.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}})}});
//# sourceMappingURL=app.925288d6.js.map