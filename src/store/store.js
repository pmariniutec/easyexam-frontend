import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth from '@/store/modules/auth'
import password from '@/store/modules/password'
import exams from '@/store/modules/exams'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		password,
		exams
	}
})

export default store
