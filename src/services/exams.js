import session from './session'

const examService = {
    createCourse(name, code) {
		return session.post('/api/course/create', {name, code })
    },
	  getCourses () {
		return session.get('/api/course')
	},
    deleteCourse (courseId){
        return session.delete('/api/course/${courseId}')
    }
	createExam (title, questions, keywords) {
		return session.post('/api/exam/create/', { title, questions, keywords })
	},
	fetchExams () {
		return session.get('/api/exam/')
	}
}
export default examService
