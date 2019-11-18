import session from './session'


const examService = {

	fetchExams () {
		return session.get('/api/course')
	}
}
export default examService
