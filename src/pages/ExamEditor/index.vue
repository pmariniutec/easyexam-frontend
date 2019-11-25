<template>
	<v-container
		d-flex
		fluid
		class="pa-0"
	>
		<v-row no-gutters>
			<div class="go-back-container">
				<router-link
					:to="{name: 'courses'}"
				>
					<IconBack />
				</router-link>
			</div>
			<div class="exam-editor-container"> <ExamEditorPanel />
			</div>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'

import ExamEditorPanel from '@/pages/ExamEditor/Panel'
import SideBar from '@/components/SideBar'
import IconBack from '@/components/icons/IconBack'
import BaseContainer from '@/components/BaseContainer'

export default {
	name: 'ExamEditor',
	components: {
		SideBar,
		IconBack,
		ExamEditorPanel,
		BaseContainer
	},
	data: () => ({}),
	beforeMount: function () {
		let examId = this.$route.params.id
		if (examId) {
			this.getExamById({ examId })
		} else {
			let newExam = {
				title: 'New Exam',
				questions: [],
				keywords: []
			}
			this.selectExam(newExam)
		}
	},
	methods: {
		...mapActions('exam', ['getExamById', 'selectExam']),
		changeTab: function (href) {
		  this.$router.push({ name: href })
		}
	}
}
</script>

<style scoped>
	.exam-editor-container {
		width: 90%;
		height: 67%;
	}

	.go-back-container {
		height: 100%;
		width: 5%;
		padding: 25px 0 0 10px;
		margin: 0 20px 0 0;
	}
</style>
