import courseService from '@/services/course'
import session from '@/services/session'

import {
	CREATE_COURSE,
	SET_COURSES_DATA,
	ADD_EXAM_COURSE,
	SELECT_COURSE,
	DELETE_COURSE

} from './types'

const initialState = {
	courses: [],
	currentCourse: {
		id: '',
		name: '',
		code: '',
		exams: [],
		created: '',
		updated: ''
	}
}

const getters = {
	getCourseList: state => state.courses,
	getCurrentCourse: state => state.currentCourse,
	getCourseExams: state => state.currentCourse.exams
}

const actions = {
	createCourse ({ commit }, { name, code, exams }) {
		return courseService.createCourse(name, code, exams)
			.then(({ data }) => commit(CREATE_COURSE, data))
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
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
