
import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';


Vue.use(VueHighlightJS);
Vue.use(VeeValidate);
Vue.config.productionTip = false

<<<<<<< HEAD
// import './assets/lib/styles/paraiso-light.css';
// import 'highlight.js/styles/agate.css';
=======
>>>>>>> 08c39dafabcc39da7b120b2f556ea31bfd7b80d1
import 'highlight.js/styles/atom-one-light.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
