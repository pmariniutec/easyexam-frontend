import session from './session'

const courseService = {
	createCourse (name, code, exams) {
		return session.post('/course/create/', { name, code, exams })
	},
	getCourses () {
		return session.get('/course/')
	},
	addExamToCourse (courseId, examId) {
		return session.post('/course/exam/add/', { courseId, examId })
	}

}

export default courseService
