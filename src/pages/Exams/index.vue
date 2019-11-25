<template>
	<v-container
		d-flex
		fluid
		class="pa-0"
	>
		<v-row no-gutters>
			<v-col
				class="sidebar-container"
			>
				<SideBar
					@change-tab-event="changeTab"
				/>
			</v-col>
			<BaseContainer>
				<h1 v-if="$route.params.id"> {{ getCurrentCourse.name }} Exams </h1>
        <h1 v-else> Exams </h1>
				<v-row class="exams-headers">
					<v-col>Name</v-col>
					<v-col>Questions</v-col>
					<v-col>Last Modified</v-col>
					<v-col>Date Created</v-col>
				</v-row>
				<div
					v-for="data in exams"
					:key="data.id"
					class="exams-data"
				>
					<ExamRowComponent :exam-info="data" />
				</div>
			</BaseContainer>
		</v-row>
	</v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import ExamRowComponent from '@/pages/Exams/ExamRowComponent'
import SideBar from '@/components/SideBar'
import BaseContainer from '@/components/BaseContainer'

export default {
	name: 'Exams',
	components: {
		ExamRowComponent,
		SideBar,
		BaseContainer
	},
	data () {
		return {
			debugData: true
		}
	},
	computed: {
		...mapGetters('exam', ['getExamList']),
		...mapGetters('course', ['getCurrentCourse', 'getCourseExams']),
		exams: function () {
			let courseId = this.$route.params.id
			if (courseId) {
				return this.getCourseExams
			} else {
				return this.getExamList
			}
		}
	},
	beforeMount: function () {
		let courseId = this.$route.params.id
		if (courseId) {
		  this.getCourseById({ courseId })
			this.fetchExamsByCourse(courseId)
		} else {
		  this.fetchExams()
		}
	},
	methods: {
		...mapActions('exam', ['getExams']),
		...mapActions('course', ['getCourseById', 'getExamsByCourse']),
		fetchExamsByCourse: async function (courseId) {
			await this.getExamsByCourse({ courseId })
		},
		fetchExams: async function () {
			await this.getExams()
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
