import courseService from '@/services/course'
import session from '@/services/session'

import {
	CREATE_COURSE,
	SET_COURSES_DATA,
	ADD_EXAM_COURSE,
	SELECT_COURSE
} from './types'

const initialState = {
	courses: [],
	currentCourse: null
}

const getters = {
	getCourseList: state => state.courses,
	getCurrentCourse: state => state.currentCourse
}

const actions = {
	createCourse ({ commit }, { name, code, exams }) {
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
	},
	getCourseById ({ commit }, { courseId }) {
		commit(SELECT_COURSE, courseId)
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
	[SELECT_COURSE] (state, courseId) {
		// what if courses werent fetched
		// TODO: add fallback, update state with getCourses
		state.currentCourse = state.courses.filter(course => {
			return course.id === courseId
		})
		console.log('Current course set to: ', state.currentCourse)
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
