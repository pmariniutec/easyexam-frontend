import session from './session'
var qs = require('qs')

const questionService = {
	addRating (questionId, rating) {
		return session.post(`/question/${questionId}/rating`, { rating })
	},
	createQuestion (content, keywords) {
		return session.post('/question/create', { content, keywords })
	},
	getQuestions () {
		return session.get('/question')
	},
	getQuestions (keywords) {
		console.log('KEYWORDS M: ', keywords)
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
