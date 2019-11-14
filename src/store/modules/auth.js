import authService from '@/services/auth'
import session from '@/services/session'

import {
	LOGIN_BEGIN,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	LOGOUT,
	REMOVE_TOKEN,
	SET_TOKEN,
	REGISTRATION_BEGIN,
	REGISTRATION_SUCCESS,
	REGISTRATION_FAILURE,
	REGISTRATION_CLEAR,
	SET_USER_DATA,
	UNSET_USER_DATA
} from './types'

const TOKEN_STORAGE_KEY = 'easyexam_token'

const initialState = {
	authenticating: false,
	error: false,
	token: null,
	activationCompleted: false,
	activationError: false,
	activationLoading: false,
	registrationCompleted: false,
	registrationError: false,
	registrationLoading: false,
	isSocialLogin: '',
	user: null
}

const getters = {
	isAuthenticated: state => !!state.token,
	isSocialLogin: state => state.isSocialLogin,
	getUser: state => state.user
}

const actions = {
	login ({ commit }, { email, password }) {
		commit(LOGIN_BEGIN)
		return authService.login(email, password)
			.then(({ data }) => commit(SET_TOKEN, data.key))
			.then(() => commit(LOGIN_SUCCESS))
			.catch(() => commit(LOGIN_FAILURE))
	},

	logout ({ commit }) {
		return authService.logout()
			.then(() => commit(LOGOUT))
			.finally(() => commit(REMOVE_TOKEN))
	},

	checkAuthToken ({ commit }) {
		const token = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY))
		const now = Date.now()
		if (token !== null && token.expiration) {
			commit(SET_TOKEN, token.token)
		}
		if (token === null || token.expiration < now) {
			commit(REMOVE_TOKEN)
		}
	},
	createAccount ({ commit }, { firstName, lastName, email, password, role}) {
		commit(REGISTRATION_BEGIN)
		return authService.createAccount(firstName, lastName, email, password, role)
			.then((response) => {
				commit(REGISTRATION_SUCCESS)
				commit(SET_TOKEN, response.data.key)
			})
			.catch(() => {
				commit(REGISTRATION_FAILURE)
			})
	},

	userDetail ({ commit }) {
		return authService.getAccountDetails()
			.then(({ data }) => {
				commit(SET_USER_DATA, data)
			})
	}
}

const mutations = {
	[LOGIN_BEGIN] (state) {
		state.authenticating = true
		state.error = false
	},
	[LOGIN_FAILURE] (state) {
		state.authenticating = false
		state.error = true
	},
	[LOGIN_SUCCESS] (state) {
		state.authenticating = false
		state.error = false
	},
	[LOGOUT] (state) {
		state.authenticating = false
		state.error = false
	},
	[SET_TOKEN] (state, token) {
		const obj = { token: token, expiration: Date.now() + 2 * 24 * 60 * 60 * 1000 } // Expires in 2 days
		localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(obj))
		session.defaults.headers.Authorization = `Token ${token}`
		state.token = token
	},
	[REMOVE_TOKEN] (state) {
		localStorage.removeItem(TOKEN_STORAGE_KEY)
		delete session.defaults.headers.Authorization
		state.token = null
	},
	[REGISTRATION_BEGIN] (state) {
		state.registrationLoading = true
	},
	[REGISTRATION_CLEAR] (state) {
		state.registrationCompleted = false
		state.registrationError = false
		state.registrationLoading = false
	},
	[REGISTRATION_FAILURE] (state) {
		state.registrationError = true
		state.registrationLoading = false
	},
	[REGISTRATION_SUCCESS] (state) {
		state.registrationCompleted = true
		state.registrationError = false
		state.registrationLoading = false
	},
	[SET_USER_DATA] (state, data) {
		state.user = data
	},
	[UNSET_USER_DATA] (state) {
		state.user = {}
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
