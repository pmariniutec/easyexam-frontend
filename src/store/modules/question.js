import questionService from '@/services/question'
import session from '@/services/session'

import {
	CREATE_QUESTION,
	GET_QUESTIONS
} from './types'

const initialState = {
	currentQuestion: null,
	suggestedQuestions: []
}

const getters = {
	getCurrentQuestion: state => state.currentQuestion
}

const actions = {
	createQuestion ({ commit }, { content }) {
		return questionService.createQuestion(content)
			.then(({ data }) => commit(CREATE_QUESTION, data))
			.catch(error => {
				console.log(error.response)
			})
	},
	fetchSuggestedQuestions ({ commit }, { keywords }) {
		console.log('TRYING TO FETCH: ', keywords)
		return questionService.getQuestions(keywords)
			.then(({ data }) => commit(GET_QUESTIONS, data))
			.catch(error => {
				console.log(error.response)
			})
	}
}

const mutations = {
	[CREATE_QUESTION] (state, data) {
		console.log('MUTATION CREATE_QUESTION: ', data)
	},
	[GET_QUESTIONS] (state, data) {
		console.log('MUTATION GET_QUESTIONS: ', data)
		state.suggestedQuestions = data
	}
}

export default {
	namespaced: true,
	state: initialState,
	getters,
	actions,
	mutations
}
