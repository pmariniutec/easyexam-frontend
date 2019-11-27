import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth from '@/store/modules/auth'
import password from '@/store/modules/password'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		password
	}
})

export default store
