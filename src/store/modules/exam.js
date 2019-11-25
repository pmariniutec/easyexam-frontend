import examService from '@/services/exam'

import {
	CREATE_EXAM,
	SET_EXAMS_DATA,
	SELECT_EXAM,
	PREVIEW_EXAM_BEGIN,
	PREVIEW_EXAM_SUCCESS,
	PREVIEW_EXAM_FAILURE,
	SET_EXAM_PREVIEW,
	DELETE_EXAM
} from './types'

const initialState = {
	exams: [],
	currentExam: {
		title: '',
		questions: []
	},
	currentPreview: null,
	loadingPreview: false,
	error: false
}

const getters = {
	getExamList: state => state.exams,
	getCurrentExam: state => state.currentExam
}

const actions = {
	createExam ({ commit }, { title, questions, courseId }) {
		return examService.createExam(title, questions, courseId)
			.then(({ data }) => commit(CREATE_EXAM, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	getExams ({ commit }) {
		return examService.getExams()
			.then(({ data }) => commit(SET_EXAMS_DATA, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	getExamById ({ commit }, { examId }) {},
	selectExam ({ commit }, { title, questions }) {
		commit(SELECT_EXAM, { title, questions })
	},
	previewExam ({ commit }, { latexString }) {
		commit(PREVIEW_EXAM_BEGIN)
		return examService.previewExam(latexString)
			.then(({ data }) => commit(SET_EXAM_PREVIEW, data))
			.then(() => commit(PREVIEW_EXAM_SUCCESS))
			.catch(error => commit(PREVIEW_EXAM_FAILURE))
	},
	deleteExam ({ commit }, id) {
		return examService.deleteExam(id)
			.then(({ data }) => commit(DELETE_EXAM, data))
	}
}

const mutations = {
	[DELETE_EXAM] (state, data) {
		console.log('MUTATION DELETE EXAM: ', data)
	},
	[CREATE_EXAM] (state, data) {
		console.log('MUTATION CREATE_EXAM: ', data)
	},
	[SET_EXAMS_DATA] (state, data) {
		state.exams = data
	},
	[SELECT_EXAM] (state, exam) {
		state.currentExam = exam
	},
	[PREVIEW_EXAM_BEGIN] (state) {
		state.loadingPreview = true
		state.error = false
	},
	[PREVIEW_EXAM_SUCCESS] (state) {
		state.loadingPreview = false
		state.error = false
	},
	[PREVIEW_EXAM_FAILURE] (state) {
		state.loadingPreview = false
		state.error = true
	},
	[SET_EXAM_PREVIEW] (state, data) {
		state.currentPreview = data
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
