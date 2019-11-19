import session from './session'

const examService = {
    createCourse(name, code) {
		return session.post('/auth/course/create', {name, code })
    },
	getCourses () {
		return session.get('/api/course')
	},
    deleteCourse (courseId){
        return session.delete('/api/course/${courseId}')
    }
}
export default examService
