import questionService from '@/services/question'
import session from '@/services/session'

import {
	ADD_RATING_TO_QUESTION,
	CREATE_QUESTION,
	GET_QUESTIONS
} from './types'

const initialState = {
	selectedQuestion: {
		content: null,
		id: null,
		keywords: [],
		ratings: []
	},
	suggestedQuestions: []
}

const getters = {
}

const actions = {
	addRatingToQuestion ({ commit }, { questionId, rating }) {
		return questionService.addRating(questionId, rating)
			.then(({ data }) => commit(ADD_RATING_TO_QUESTION, data))
			.catch(error => console.log(error.response))
	},
	createQuestion ({ commit }, { content, keywords }) {
		return questionService.createQuestion(content, keywords)
			.then(({ data }) => commit(CREATE_QUESTION, data))
			.catch(error => console.log(error.response))
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
	[ADD_RATING_TO_QUESTION] (state, data) {
		console.log('MUTATION ADD_RATING_TO_QUESTION: ', data)
	},
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
