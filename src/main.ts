import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Import custom SCSS
import './styles/app.scss'

// Include BootstrapVue
Vue.use(BootstrapVue)
// Include BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// Sweetalert options
const options = {
  confirmButtonColor: '#ff6600',
  cancelButtonColor: '#d03636',
};
// Include VueSweetalert2
Vue.use(VueSweetalert2, options);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
