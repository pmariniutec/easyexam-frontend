import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'
import router from './router'
import store from './store/store'

import StarRating from 'vue-star-rating'

import vuetify from './plugins/vuetify'

Vue.component('star-rating', StarRating)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	vuetify,
	render: h => h(App)
}).$mount('#app')
