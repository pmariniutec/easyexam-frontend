import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth from '@/store/modules/auth'
import password from '@/store/modules/password'
import course from '@/store/modules/course'
import exam from '@/store/modules/exam'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		password,
		course,
    exam,
	}
})

export default store
