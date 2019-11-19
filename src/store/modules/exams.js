import session from '@/services/session'
import authService from '@/services/auth'
import examService from '@/services/exams'

const TOKEN_STORAGE_KEY = 'easyexam_token'

const initialState = {
}

const actions = {
	createExam ({ commit }, { title, questions, keywords }) {
		if (authService.isAuthenticated()) {
			return examService.createExam(title, questions, keywords)
		}
	},
	updateExams () {
		if (authService.isAuthenticated()) {
			commit(FETCHED_EXAMS)
			return examService.fetchExams()
		}
	}
}

export default {
	state: initialState,
	actions
}
