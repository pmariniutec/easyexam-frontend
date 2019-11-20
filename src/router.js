import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/Dashboard'
import Courses from './views/Courses'
import Test from './views/Test'
import PageNotFound from './views/PageNotFound'
import ExamEditor from './views/ExamEditor'
import DashboardProfile from './views/DashboardProfile'

Vue.use(Router)

const requireAuth = (to, from, next) => {
	store.dispatch('auth/checkAuthToken')
		.then(() => {
			if (!store.getters['auth/isAuthenticated']) {
				next('/login')
			} else {
				next()
			}
		})
}

const requireNoAuth = (to, from, next) => {
	store.dispatch('auth/checkAuthToken')
		.then(() => {
			if (store.getters['auth/isAuthenticated']) {
				next('/dashboard')
			} else {
				next()
			}
		})
}

const redirectLogout = (to, from, next) => {
	store.dispatch('auth/logout')
		.then(() => next('/login'))
}

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
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
			beforeEnter: redirectLogout
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: Dashboard,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/exam-editor',
			name: 'examEditor',
			component: ExamEditor,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/courses',
			name: 'courses',
			component: Courses,
			beforeEnter: requireAuth
		},
		{
			path: '/dashboard/profile',
			name: 'profile',
			component: DashboardProfile,
			beforeEnter: requireAuth
		},
		{
			path: '/test',
			name: 'test',
			component: Test
		},
		{
			path: '*',
			name: 'pageNotFound',
			component: PageNotFound
		}
	]
})

export default router
