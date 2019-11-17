<template>
	<v-card
		shaped
		hover
		elevation="10"
		width="900"
		min-height="100"
		class="mx-auto"
	>
		<v-row>
			<v-col class="text-center">
				<h2>Name</h2>
			</v-col>

			<v-col class="text-center">
				<h2>Rating</h2>
			</v-col>

			<v-col class="text-center">
				<h2>Questions</h2>
			</v-col>

			<v-col class="text-center">
				<h2>Last Modified</h2>
			</v-col>

			<v-col class="text-center">
				<h2>Date Created</h2>
			</v-col>
		</v-row>

		<div v-for="data in exams_data">
			<ExamComponent :exam_info="data" />
		</div>

		<v-col md="5">
			<button @click="addFind">
				Add test
			</button>
		</v-col>
	</v-card>
</template>

<script>

import ExamComponent from '@/components/ExamComponent'

export default {
	name: 'ViewExam',
	components: {
		ExamComponent
	},

	data () {
		return {
			exams_data: []
		}
	},
	computed: {

	},
	methods: {
		addFind: function () {
			this.exams_data.push({ name: 'hola', rating: 2.5, number: 10, date_edit: '10/10/10', date_create: '10/10/10' })
		}
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
.container {
    display: grid;
    grid-template-row: 20%  20%  20%  20%  20%;
}
.v-col {
    justify-items: center;
}
</style>
