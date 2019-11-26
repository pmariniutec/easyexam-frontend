import session from './session'

const questionService = {
  addRating(questionId, rating) {
    return session.post(`/question/${questionId}/rating`, { rating })
  },
	createQuestion (content, keywords) {
		return session.post('/question/create', { content, keywords })
	},
	getQuestions () {
		return session.get('/question')
	},
}

export default questionService
