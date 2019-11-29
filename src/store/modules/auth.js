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
	UNSET_USER_DATA,
	UPDATE_USER_POINTS,
	NOT_ENOUGH_POINTS,
	USER_PATCH_BEGIN,
	USER_PATCH_SUCCESS,
	USER_PATCH_ERROR,
	FORGOT_PASSWORD_SUCCESS,
	FORGOT_PASSWORD_FAILURE,
	FORGOT_PASSWORD_BEGIN
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
	forgotPasswordError: false,
	isSocialLogin: '',
	inForgotPasswordRequest: false,
	user: {
		firstName: '',
		lastName: '',
		points: 0
	},
	notEnoughPoints: false,
	inUserPatch: false,
	userPatchError: false
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
			.then(({ data }) => commit(SET_TOKEN, data.accessToken))
			.then(() => commit(LOGIN_SUCCESS))
			.catch(() => commit(LOGIN_FAILURE))
	},
	logout ({ commit }) {
		commit(LOGOUT)
		commit(REMOVE_TOKEN)
	},
	checkAuthToken ({ commit }) {
		const token = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY))
		const now = Date.now()
		if (token !== null && token.expiration) {
			commit(SET_TOKEN, token.token)
		}
		if (token === null || token.expiration < now) {
			commit(REMOVE_TOKEN)
			commit(LOGOUT)
		}
	},
	createAccount ({ commit }, { firstName, lastName, email, password, role }) {
		commit(REGISTRATION_BEGIN)
		return authService.createAccount(firstName, lastName, email, password, role)
			.then((response) => {
				commit(REGISTRATION_SUCCESS)
			})
			.catch((err) => {
				commit(REGISTRATION_FAILURE)
				console.log('REGISTRATION_FAILURE')
				throw err
			})
	},
	userDetail ({ commit }) {
		return authService.getAccountDetails()
			.then(({ data }) => {
				commit(SET_USER_DATA, data)
				return data
			})
			.catch(error => {
				throw error
			})
	},
	updateAccount ({ commit }, obj) {
		commit(USER_PATCH_BEGIN)
		return authService.updateAccountDetails(obj)
			.then(({ data }) => {
				commit(USER_PATCH_SUCCESS)
				return data
			})
			.catch(error => {
				commit(USER_PATCH_ERROR)
				throw error
			})
	},
	updateUserPoints ({ commit }, { points }) {
		if (points < 0) {
			commit(NOT_ENOUGH_POINTS)
			return
		}
		return authService.updateAccountDetails({ points })
			.then(({ data }) => {
				commit(UPDATE_USER_POINTS, points)
			})
			.catch(error => {
				console.log(error.response)
			})
	},
	sendAccountPasswordResetEmail ({ commit }, { email }) {
		commit(FORGOT_PASSWORD_BEGIN)
		return authService.sendAccountPasswordResetEmail(email)
			.then(({ data }) => {
				console.log(data)
				commit(FORGOT_PASSWORD_SUCCESS)
				return data
			})
			.catch(error => {
				console.log(error.response)
				commit(FORGOT_PASSWORD_FAILURE)
				throw error
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
		session.defaults.headers.Authorization = `Bearer ${token}`
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
	},
	[UPDATE_USER_POINTS] (state, data) {
		state.notEnoughPoints = false
		state.user.points = data
	},
	[NOT_ENOUGH_POINTS] (state) {
		state.notEnoughPoints = true
	},
	[USER_PATCH_BEGIN] (state) {
		state.inUserPatch = true
	},
	[USER_PATCH_SUCCESS] (state) {
		state.inUserPatch = false
		state.userPatchError = false
	},
	[USER_PATCH_ERROR] (state) {
		state.inUserPatch = false
		state.userPatchError = true
	},
	[FORGOT_PASSWORD_BEGIN] (state) {
		state.inForgotPasswordRequest = true
	},
	[FORGOT_PASSWORD_SUCCESS] (state) {
		state.forgotPasswordError = false
		state.inForgotPasswordRequest = false
	},
	[FORGOT_PASSWORD_FAILURE] (state) {
		state.forgotPasswordError = true
		state.inForgotPasswordRequest = false
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
