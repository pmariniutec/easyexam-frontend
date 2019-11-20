import courseService from '@/services/course'
import session from '@/services/session'

import {
	CREATE_COURSE,
	SET_COURSES_DATA,
	ADD_EXAM_COURSE
} from './types'

const initialState = {
	courses: []
}

const getters = {
	getCourses: state => state.courses
}

const actions = {
	createCourse ({ commit }, { name, code, exams }) {
		console.log('HEADERS:', session.defaults.headers)
		return courseService.createCourse(name, code, exams)
			.then(({ data }) => commit(CREATE_COURSE, data))
	},
	getCourses ({ commit }) {
		return courseService.getCourses()
			.then(({ data }) => {
				commit(SET_COURSES_DATA, data)
			})
	},
	addExamToCourse ({ commit }, { courseId, examId }) {
		return courseService.addExamToCourse(courseId, examId)
			.then(({ data }) => commit(ADD_EXAM_COURSE, data))
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
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
