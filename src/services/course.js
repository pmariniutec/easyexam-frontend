import session from './session'

const courseService = {
	createCourse (name, code, exams) {
		return session.post('/course/create/', { name, code, exams })
	},
	getCourses () {
		return session.get('/course/')
	},
	deleteCourse (courseId) {
		console.log(courseId)
		return session.delete(`/course/${courseId}`)
	},
	addExamToCourse (courseId, examId) {
		return session.post('/course/exam/add/', { courseId, examId })
	},
	getCourseById (courseId) {
		return session.get(`/course/${courseId}`)
	}
}

export default courseService
