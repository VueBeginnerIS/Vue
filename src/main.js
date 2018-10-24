
import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';


Vue.use(VueHighlightJS);
Vue.use(VeeValidate);
Vue.config.productionTip = false

<<<<<<< HEAD
import './assets/lib/styles/paraiso-light.css';
// import 'highlight.js/styles/agate.css';
=======
import 'highlight.js/styles/atom-one-light.css';
>>>>>>> 729868c807c67a63f6d6dd212efabd8e23972ece
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
