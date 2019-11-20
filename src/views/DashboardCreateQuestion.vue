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
			<v-col
				class="panel-container"
			>
				<CreateQuestionPanel />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import CreateQuestionPanel from '@/components/create_questions/CreateQuestionPanel'

export default {
	name: 'DashboardCreateQuestion',
	components: {
		SideBar,
		CreateQuestionPanel
	},
	data: () => ({}),
	methods: {
		changeTab: function (href) {
		  this.$router.push(`/${href}`)
		}
	}
}
</script>

<style scoped>
.sidebar-container {
  max-width: 85px;
	position: fixed;
}
.panel-container {
  padding: 2vh;
}
</style>
