import session from './session'

const examService = {
	createExam (title, questions, courseId) {
		// TODO: this possible need a stringify
		return session.post('/exam/create/', { title, questions, courseId })
	},
	getExams (courseId) {
		if (courseId) {
			return session.get(`/course/${courseId}/exams`)
		} else {
			return session.get('/exam/')
		}
	},
	getExamById (id) {
		return session.get(`/exam/${id}`)
	},
	previewExam (latexString) {
		return session.post(
			'/latex/compile/',
			latexString,
			{
				responseType: 'arraybuffer',
				dataType: 'blob'
			}
		)
	},
	compileExam (title, questions, courseId) {
		return session.post(
			'/latex/compile/exam',
			{ title, questions, courseId },
			{
				responseType: 'arraybuffer',
				dataType: 'blob'
			}
		)
	},
	deleteExam (id) {
		return session.delete(`/exam/${id}`)
	}
}
export default examService
