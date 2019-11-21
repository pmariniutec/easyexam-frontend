import axios from 'axios'

const CSRF_COOKIE_NAME = 'csrftoken'
const CSRF_HEADER_NAME = 'X-CSRFToken'

const session = axios.create({
	baseURL: process.env.VUE_APP_API_URL || 'http://localhost:5000/api/',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYXJpYUBkdWNrLmNvbSIsImV4cCI6MTU3NDM3NDEwNSwiaWF0IjoxNTc0MzU2MTA1fQ.t-xJcwMVbqjZm9pkOB0zShSuxK93RD0rYz-TdHgJowyORhbEYx3aVvuzGuyveX9QuFfiUkQ8YPEaFjyaqt14MA'
	},
	xsrfCookieName: CSRF_COOKIE_NAME,
	xsrfHeaderName: CSRF_HEADER_NAME,
})

export default session
