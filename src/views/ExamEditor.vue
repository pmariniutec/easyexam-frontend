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
				<CreateExamPanel />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import ExamEditorPanel from '@/components/exam-editor/ExamEditorPanel'

export default {
	name: 'ExamEditor',
	components: {
		SideBar,
		ExamEditorPanel
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
  margin-left: 70px;
  padding: 2vh;
}
</style>
