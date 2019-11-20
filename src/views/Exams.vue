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
			<v-col class="panel-container">
            <v-card
                shaped
                hover
                elevation="10"
                width="900"
                min-height="100"
                class="mx-auto"
            >
                <v-row class="grey--text text--darken-2 text-center title">
                    <v-col> Name </v-col>

                    <v-col> Difficulty </v-col>

                    <v-col> Questions </v-col>

                    <v-col>	Last Modified </v-col>

                    <v-col>	Date Created </v-col>
                </v-row>
                <v-divider />
                <div
                    v-for="data in examsData"
                    :key="data.name"
                >
                    <ExamRowComponent :examInfo="data" />
                </div>

                <v-col
                    v-if="debugData"
                    md="5"
                >
                    <button @click="addFind">
                        Add test
                    </button>
                </v-col>
            </v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import { mapActions } from 'vuex'
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
			examsData: [],
			debugData: true
		}
	},
	computed: {

	},
	beforeMount () {
        //TODO add way to fetch params
	},
	methods: {
		addFind: function () {
			this.examsData.push({ name: 'hola', difficulty: 2.5, number: 10, date_edit: '10/10/10', date_create: '10/10/10' })
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
  max-width: 85px;
}
.panel-container {
  padding: 2vh;
}
</style>
