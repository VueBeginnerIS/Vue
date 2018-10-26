
import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate'
import router from './router'
import VueHighlightJS from 'vue-highlight.js';


Vue.use(VueHighlightJS);
Vue.use(VeeValidate);
Vue.config.productionTip = false

import './assets/lib/styles/paraiso-light.css';
// import 'highlight.js/styles/agate.css';

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
