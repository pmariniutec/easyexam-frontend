import axios from 'axios'
import store from '@/store/store'
import router from '@/router'

const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

const session = axios.create({
	baseURL: process.env.VUE_APP_API_URL || 'http://localhost:5000/api',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	xsrfCookieName: CSRF_COOKIE_NAME,
	xsrfHeaderName: CSRF_HEADER_NAME
})

session.interceptors.response.use((response) => {
	// do something with the response data
	console.log('Response was received')

	return response
}, (error) => {
	if (error.response.status === 401) {
		store.dispatch('auth/logout')
		router.push('/login')
		return null
	}

	return Promise.reject(error)
})

export default session
