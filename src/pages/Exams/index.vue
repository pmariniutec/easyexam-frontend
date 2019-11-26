<template>
	<div>
		<div
			class="sidebar-container"
		>
			<SideBar
				current-tab="Exams"
				@change-tab-event="changeTab"
			/>
		</div>
		<BaseContainer style="margin-left: auto; margin-right: auto;">
			<v-row>
				<h1 v-if="$route.params.id">
					{{ getCurrentCourse.name }} Exams
				</h1>
				<h1 v-else>
					Exams
				</h1>
			</v-row>
			<v-row class="exams-headers">
				<v-col>Name</v-col>
				<v-col>Questions</v-col>
				<v-col>Last Modified</v-col>
				<v-col>Date Created</v-col>
				<v-col cols="1" />
			</v-row>
			<ExamRowComponent
				v-for="data in exams"
				:key="data.id"
				:exam-info="data"
				class="exams-data"
			/>
		</BaseContainer>
		<div class="add-menu-container">
			<AddMenu />
		</div>
	</div>
</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex'
import ExamRowComponent from '@/pages/Exams/ExamRowComponent'
import SideBar from '@/components/SideBar'
import BaseContainer from '@/components/BaseContainer'
import AddMenu from '@/components/AddMenu'

export default {
	name: 'Exams',
	components: {
		ExamRowComponent,
		SideBar,
		BaseContainer,
		AddMenu
	},
	data () {
		return {
			debugData: true
		}
	},
	computed: {
		...mapGetters('exam', ['getExamList']),
		...mapGetters('course', ['getCurrentCourse']),
		...mapState('course', ['currentCourse']),
		...mapState('exam', ['exams'])
	},
	beforeMount: function () {
		let courseId = this.$route.params.id

		if (courseId) {
		  this.getCourseById({ courseId })
			this.fetchExams({ courseId })
		} else {
			this.fetchExams({ courseId: null })
		}
	},
	methods: {
		...mapActions('exam', ['getExams']),
		...mapActions('course', ['getCourseById', 'getExamsByCourse']),
		...mapActions('exam', ['deleteExam']),
		fetchExamsByCourse: async function (courseId) {
			await this.getExamsByCourse({ courseId })
		},
		fetchExams: async function (payload) {
			await this.getExams(payload)
		},
		changeTab: function (href) {
			this.$router.push({ name: href })
		}
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
	.sidebar-container {
	  max-width: 180px;
	}

	.add-menu-container {
		position: fixed;
		bottom: 26px;
		right: 24px;
		width: 7%;
		height: 11%;
	}

	h1 {
		font-family: Helvetica;
		font-size: 16pt;
		color: #23246E;
	}

	.exams-table {
		width: 100%;
		margin: 25px 0 0 0;
		border-collapse: collapse;
	}

	.exams-headers {
		text-align: center;
		font-family: Helvetica;
		font-size: 100%;
		font-weight: 600;
		color: #969696;
		border-bottom: #969696;
    border-bottom-style: solid;
    border-bottom-width: 2px;
	}

	.exams-data {
	}
</style>
