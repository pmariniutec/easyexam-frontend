import session from './session'

const authService = {
	login (email, password) {
		return session.post('/auth/login/', {email, password})
	},

	logout () {
		return session.post('/logout/', {})
	},

	createAccount(firstName, lastName, email, password, role) {
		let name = firstName + ' ' + lastName
		return session.post('/auth/register/', {name, email, password, role})
	},

	changeAccountPassword (password1, password2) {
		return session.post('/password/change/', { password1, password2 })
	},

	sendAccountPasswordResetEmail (email) {
		return session.post('/password/reset/', { email })
	},

	resetAccountPassword (uid, token, newPass1, newPass2) {
		return session.post('/password/reset/confirm/', { uid, token, newPass1, newPass2 })
	},

	getAccountDetails () {
		return session.get('/user/')
	},

	updateAccountDetails (data) {
		return session.patch('/user/', data)
	}
}

export default authService
