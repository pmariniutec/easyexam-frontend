import axios from 'axios'

const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

const session = axios.create({
	baseURL: process.env.VUE_APP_API_URL || 'http://ec2-3-95-228-103.compute-1.amazonaws.com/api',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	},
	xsrfCookieName: CSRF_COOKIE_NAME,
	xsrfHeaderName: CSRF_HEADER_NAME
})

export default session
