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
				<h1>Exams</h1>
					<v-row class="exams-headers">
						<v-col>Name</v-col>
						<v-col>Questions</v-col>
						<v-col>Last Modified</v-col>
						<v-col>Date Created</v-col>
					</v-row>
					<div
						class="exams-data"
						v-for="data in listExams"
						:key="data.id"
					>
						<ExamRowComponent :exam-info="data" />
					</div>
			</BaseContainer>
		</v-row>
	</v-container>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import SideBar from '@/components/SideBar'
import ExamRowComponent from '@/components/view_exams/ExamRowComponent'
import BaseContainer from '@/components/BaseContainer'

export default {
	name: 'ExamsView',
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
		listExams() {
			return this.getExamList
		}
	},
	beforeMount () {
		this.getExams()
	},
	methods: {
		...mapActions('exam', ['getExams']),
		changeTab: function (href) {
			this.$router.push({name: href})
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
