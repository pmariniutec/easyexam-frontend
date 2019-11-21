import session from './session'

const examService = {
	createExam (title, questions, keywords) {
		// TODO: this possible need a stringify
		session.post('/exam/create/', {title, questions, keywords} )
	},
	getExams () {
		return session.get('/exam/')
	},
    previewExam (latexString) {
        return session.post('/latex/compile/', latexString)
    }
}
export default examService
