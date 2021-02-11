import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import api from "./service/openweathermap";

Vue.config.productionTip = false

// DEBUG: inject store into window
if (process.env.NODE_ENV !== "production") {
  global.store = store;
  global.api = api;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
