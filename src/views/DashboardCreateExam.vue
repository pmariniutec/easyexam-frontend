<template>
	<v-container
		d-flex
		fluid
		class="pa-0 dashboard"
	>
		<v-row no-gutters>
			<v-col
				class="sidebar-container"
			>
				<SideBar
					@change-tab-event="changeTab"
				/>
			</v-col>
			<v-col
				class="panel-container"
			>
				<CreateExamPanel />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import CreateExamPanel from '@/components/create_exams/CreateExamPanel'

export default {
	name: 'DashboardCreateExam',
	components: {
		SideBar,
		CreateExamPanel
	},
	data () {
		return {}
	},
	methods: {
		changeTab: function (href) {
			this.$router.push(`/${href}`)
		}
	}
}
</script>

<style scoped>
.dashboard {
	background-color: rgba(150,150,150,0.5);
	width: 100%;
  height: 100%;
}
.sidebar-container {
  max-width: 85px;
}
.panel-container {
  padding: 2vh;
}
</style>
