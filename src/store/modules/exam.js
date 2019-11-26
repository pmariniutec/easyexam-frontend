import examService from '@/services/exam'

import {
	CREATE_EXAM,
	CREATE_EXAM_FAILURE,
	SET_EXAMS,
	SELECT_EXAM,
	SELECT_EXAM_BY_ID,
	PREVIEW_EXAM_BEGIN,
	PREVIEW_EXAM_SUCCESS,
	PREVIEW_EXAM_FAILURE,
	SET_EXAM_PREVIEW,
	DELETE_EXAM,
	UPDATE_EXAM_TITLE
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
	getCurrentExam: state => state.currentExam,
	getExamPreview: state => state.currentPreview
}

const actions = {
	createExam ({ commit }, { title, questions, courseId }) {
		return examService.createExam(title, questions, courseId)
			.then(({ data }) => commit(CREATE_EXAM, data))
			.catch(error => {
				commit(CREATE_EXAM_FAILURE, error.response)
				console.log(error.response)
			})
	},
	getExams ({ commit }, { courseId }) {
		return examService.getExams(courseId)
			.then(({ data }) => commit(SET_EXAMS, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	fetchAndSelectExam ({ commit }, { id }) {
		return examService.getExamById(id)
			.then(({ data }) => commit(SELECT_EXAM, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	selectExamById ({ commit }, { id }) {
		commit(SELECT_EXAM_BY_ID, id)
	},
	selectExam ({ commit }, exam) {
		commit(SELECT_EXAM, exam)
	},
	previewExam ({ commit }, latexString) {
		commit(PREVIEW_EXAM_BEGIN)
		return examService.previewExam(latexString)
			.then(({ data }) => commit(SET_EXAM_PREVIEW, data))
			.then(() => commit(PREVIEW_EXAM_SUCCESS))
			.catch(error => commit(PREVIEW_EXAM_FAILURE))
	},
	previewCurrentExam ({ commit }) {
		commit(PREVIEW_EXAM_BEGIN)
		commit(PREVIEW_CURRENT_EXAM)
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
		state.error = false
		console.log('MUTATION CREATE_EXAM: ', data)
	},
	[CREATE_EXAM_FAILURE] (state, data) {
		state.error = true
		console.log('error: ', data)
	},
	[SET_EXAMS] (state, data) {
		state.exams = data
	},
	[SELECT_EXAM] (state, exam) {
		console.log('EXAM IS BEING SELECTED: ', exam)
		state.currentExam = exam
	},
	[SELECT_EXAM_BY_ID] (state, id) {
		state.currentExam = state.exams.find(e => {
			return e.id == id
		})
		console.log('SELECTED CURRENT EXAM: ', state.currentExam)
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
	},
	[UPDATE_EXAM_TITLE] (state, newTitle) {
		state.currentExam.title = newTitle
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
