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
			<div
				class="exam-editor-container"
			>
				<ExamEditorPanel />
			</div>
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
	beforeMount: function () {
		let id = $route.params.id
		// if id is set then edit exam
		// else create new exam

	},
	methods: {
		changeTab: function (href) {
		  this.$router.push({ name: href })
		}
	}
}
</script>

<style scoped>
.sidebar-container {
  max-width: 180px;
}
	.exam-editor-container {
		margin: 55px 8% 0 0;
		width: 78%;
		height: 67%;
		background-color: #FFFFFF;
		padding: 40px 50px;
		border-radius: 14px;
		box-shadow: 3px 5px 20px 0px rgba(156, 161, 250, 0.16);
	}
</style>
