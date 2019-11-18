import session from '@/services/session'
import auth from '@/services/session'
import examService from '@/services/exams'

const TOKEN_STORAGE_KEY = 'easyexam_token'

const initialState = {
}
const actions = {
    updateExams() {
        if(auth.isAuthenticated()){
            commit(FETCHED_EXAMS)
            return exams.fetchExams()
        }
    }
}

const mutations = {

}

export default {
    state: initialState,
    getters,
    actions,
    mutations
}