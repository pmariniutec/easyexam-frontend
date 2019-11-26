import session from './session'
var qs = require('qs')

const questionService = {
	createQuestion (title, content) {
		return session.post('/question/create', { title, content })
	},
	getQuestions (keywords) {
		if (keywords) {
			return session.get('/question', {
				'params': { 'keywords': keywords },
				'paramsSerializer': function (keywords) {
					return qs.stringify(keywords, { arrayFormat: 'repeat' })
				}
			})
		} else {
			return session.get('/question')
		}
	}
}

export default questionService
