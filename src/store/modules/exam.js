import examService from '@/services/exam'

import {
	CREATE_EXAM,
	SET_EXAMS_DATA,
	SELECT_EXAM
} from './types'

const initialState = {
	exams: [],
	currentExam: null
}

const getters = {
	getExamList: state => state.exams,
	getCurrentExam: state => state.currentExam
}

const actions = {
	createExam ({ commit }, { title, questions, keywords }) {
		return examService.createExam(title, questions, keywords)
			.then(({ data }) => commit(CREATE_EXAM, data))
	},
	getExams ({ commit }) {
		return examService.getExams()
			.then(({ data }) => {
				commit(SET_EXAMS_DATA, data)
			})
	},
	selectExam ({ commit }, { exam }) {
		commit(SELECT_EXAM, exam)
	}
}

const mutations = {
	[CREATE_EXAM] (state, data) {
		console.log('MUTATION CREATE_EXAM: ', data)
	},
	[SET_EXAMS_DATA] (state, data) {
		state.exams = data
	},
	[SELECT_EXAM] (state, exam) {
		state.currentExam = exam
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
