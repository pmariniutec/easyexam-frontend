import session from './session'

const examService = {
	createExam (title, questions, keywords) {
		return session.post('/api/exam/create/', { title, questions, keywords })
	},
	fetchExams () {
		return session.get('/api/exam/')
	}
}
export default examService
