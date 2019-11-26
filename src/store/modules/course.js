import courseService from '@/services/course'
import session from '@/services/session'

import {
	CREATE_COURSE,
	SET_COURSES_DATA,
	ADD_EXAM_COURSE,
	SELECT_COURSE,
	DELETE_COURSE,
	SET_EXAMS_DATA
} from './types'

const initialState = {
	courses: [],
	currentCourse: {
		id: '',
		name: '',
		code: '',
		created: '',
		updated: ''
	},
	courseExams: []
}

const getters = {
	getCourseList: state => state.courses,
	getCurrentCourse: state => state.currentCourse,
	getCourseExams: state => state.courseExams
}

const actions = {
	createCourse ({ commit }, { name, code, exams }) {
		return courseService.createCourse(name, code, exams)
			.then(({ data }) => commit(CREATE_COURSE, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	selectCourse ({ commit }, { id }) {
		return courseService.getCourseById(id)
			.then(({ data }) => commit(SELECT_COURSE, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	deleteCourse ({ commit }, id) {
		return courseService.deleteCourse(id)
			.then(({ data }) => commit(DELETE_COURSE, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	getCourses ({ commit }) {
		return courseService.getCourses()
			.then(({ data }) => {
				commit(SET_COURSES_DATA, data)
			})
			.catch(error => {
				console.log(error.response)
			})
	},
	addExamToCourse ({ commit }, { courseId, examId }) {
		return courseService.addExamToCourse(courseId, examId)
			.then(({ data }) => commit(ADD_EXAM_COURSE, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	getCourseById ({ commit }, { courseId }) {
		return courseService.getCourseById(courseId)
			.then(({ data }) => commit(SELECT_COURSE, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	getExamsByCourse ({ commit }, { courseId }) {
		return courseService.getCourseExams(courseId)
			.then(({ data }) => commit(SET_EXAMS_DATA, data))
			.catch(error => {
				console.log(error.response)
			})
	}
}

const mutations = {
	[CREATE_COURSE] (state, data) {
		console.log('MUTATION CREATE_COURSE: ', data)
	},
	[SET_COURSES_DATA] (state, data) {
		state.courses = data
	},
	[ADD_EXAM_COURSE] (state, data) {
		console.log('MUTATION ADD_EXAM_COURSE: ', data)
	},
	[SELECT_COURSE] (state, data) {
		state.currentCourse = data
	},
	[DELETE_COURSE] (state, data) {
		console.log('MUTATION DELETE_COURSE: ', data)
	},
	[SET_EXAMS_DATA] (state, data) {
		state.courseExams = data
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
