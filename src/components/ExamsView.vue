<template>
	<v-card shaped
            hover
            elevation="10"
            width="900"
            min-height="100"
            class="mx-auto">

		<v-row class="grey--text text--darken-2 text-center title">
			<v-col> Name </v-col>

			<v-col> Difficulty </v-col>

			<v-col> Questions </v-col>

			<v-col>	Last Modified </v-col>

			<v-col>	Date Created </v-col>
		</v-row>
        <v-divider></v-divider>
        <div v-for="data in exams_data" 
            v-bind:key="data.name">

            <ExamRowComponent :exam_info="data" />        
        </div>

		<v-col md="5">
			<button @click="addFind">
				Add test
			</button>
		</v-col>
	</v-card>
</template>

<script>

import ExamRowComponent from '@/components/ExamRowComponent'

export default {
	name: 'ExamsView',
	components: {
        ExamRowComponent
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
			this.exams_data.push({ name: 'hola', difficulty: 2.5, number: 10, date_edit: '10/10/10', date_create: '10/10/10' })
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
.v-divider {
    margin-left: 3%;
    margin-right: 2%;
    border-width: thin;
    background-color: rgb(200, 200, 200);
}
</style>
