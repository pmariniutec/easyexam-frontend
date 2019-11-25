import session from './session'

const examService = {
	createExam (title, questions, courseId) {
		// TODO: this possible need a stringify
		return session.post('/exam/create/', { title, questions, courseId })
	},
	getExams () {
		return session.get('/exam/')
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
	deleteExam (id) {
		return session.delete(`/exam/${id}`)
	}
}
export default examService
