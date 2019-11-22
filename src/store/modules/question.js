import questionService from '@/services/question'
import session from '@/services/session'

import {
	CREATE_QUESTION,
	SET_QUESTION_DATA,
	ADD_QUESTION_EXAM,
	DELETE_QUESTION,
	FETCH_QUESTIONS
} from './types'

const initialState = {
	currentQuestion: null,
	suggestedQuestions: []
}

const getters = {
	getCurrentQuestion: state => state.currentQuestion
}

const actions = {
	createQuestion ({ commit }, { title, content }) {
		return questionService.createQuestion(title, content)
			.then(({ data }) => commit(CREATE_QUESTION, data))
			.catch(error => {
				console.log(error.response)
			})
	}
}

const mutations = {
	[CREATE_QUESTION] (state, data) {
		console.log('MUTATION CREATE_QUESTION: ', data)
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
