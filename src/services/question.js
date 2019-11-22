import session from './session'

const questionService = {
	createQuestion (title, content) {
		return session.post('/question/create', { title, content })
	},
	getQuestions () {
		return session.get('/question')
	}
}

export default questionService
