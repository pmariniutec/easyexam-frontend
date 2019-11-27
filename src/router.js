import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

import LandingPage from '@/pages/LandingPage'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import ForgotPassword from '@/pages/ForgotPassword'
import Home from '@/pages/Home'
import Courses from '@/pages/Courses'
import PageNotFound from '@/pages/PageNotFound'
import ExamEditor from '@/pages/ExamEditor'
import Profile from '@/pages/Profile'
import Exams from '@/pages/Exams'

Vue.use(Router)

const requireAuth = (to, from, next) => {
	store.dispatch('auth/checkAuthToken')
		.then(() => {
			if (!store.getters['auth/isAuthenticated']) {
				console.log('Not authenticated')
				next('/login')
			} else {
				console.log('Authenticated')
				next()
			}
		})
}

const requireNoAuth = (to, from, next) => {
	store.dispatch('auth/checkAuthToken')
		.then(() => {
			if (store.getters['auth/isAuthenticated']) {
				next('/dashboard/courses')
			} else {
				next()
			}
		})
}

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'landingPage',
			component: LandingPage
		},
		{
			path: '/login',
			name: 'login',
			component: Login,
			beforeEnter: requireNoAuth
		},
		{
			path: '/register',
			name: 'register',
			component: Register,
			beforeEnter: requireNoAuth
		},
		{
			path: '/logout',
			name: 'logout',
			redirect: to => {
				store.dispatch('auth/logout')
				return '/'
			}
		},
		{
			path: '/forgot-password',
			name: 'forgotPassword',
			component: ForgotPassword,
			beforeEnter: requireNoAuth
		},
		{
			path: '/dashboard',
			name: 'home',
			// component: Home,
			component: Courses,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/courses',
			name: 'courses',
			component: Courses,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/exam-editor',
			name: 'examEditor',
			component: ExamEditor,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/exam-editor/:id',
			name: 'examEditorId',
			component: ExamEditor,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/exams',
			name: 'exams',
			component: Exams,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/exams/:id',
			name: 'examsCourseId',
			component: Exams,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/profile',
			name: 'profile',
			component: Profile,
			beforeEnter: requireAuth
		},
		{
			path: '*',
			name: 'pageNotFound',
			component: PageNotFound
		}
	]
})

export default router
