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
			<div class="exams-container">
				<h1>Exams</h1>
				<table class="exams-table">
					<tr class="exams-headers">
						<td>Name</td>
						<td>Difficulty</td>
						<td>Questions</td>
						<td>Last Modified</td>
						<td>Date Created</td>
					</tr>
					<tr
						class="exams-data"
						v-for="data in exam"
						:key="data.id"
					>
						<ExamRowComponent :exam-info="data" />
					</tr>
				</table>
			</div>
		</v-row>
	</v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import SideBar from '@/components/SideBar'
import ExamRowComponent from '@/components/view_exams/ExamRowComponent'

export default {
	name: 'ExamsView',
	components: {
		ExamRowComponent,
		SideBar
	},
	data () {
		return {
			debugData: true
		}
	},
	computed: {
		...mapGetters('exam', ['getExamList']),
		listExams() {
			return this.getExamList
		}
	},
	beforeMount () {
		this.getExams()
	},
	methods: {
		...mapActions('exam', ['getExams']),
		addFind: function () {
			this.exams.push({ name: 'hola', difficulty: 2.5, number: 10, date_edit: '10/10/10', date_create: '10/10/10' })
		},
		changeTab: function (href) {
			this.$router.push(`/${href}`)
		}
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
.sidebar-container {
  max-width: 180px;
}
	.exams-container {
		margin: 55px 8% 0 0;
		width: 78%;
		max-height: 73%;
		background-color: #FFFFFF;
		padding: 40px 50px;
		border-radius: 14px;
		box-shadow: 3px 5px 20px 0px rgba(156, 161, 250, 0.16);
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
		overflow-y: auto;
	}
</style>
