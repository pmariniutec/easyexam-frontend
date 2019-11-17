<template>
	<v-container
		align-center
		d-flex
		fluid
		class="pa-0 dashboard-container"
	>
		<SideBar />
		<CreateExamDialog />
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import SearchBar from '@/components/SearchBar'
import CreateExamPanel from '@/components/CreateExamPanel'

export default {
	name: 'Dashboard',
	components: {
		SideBar,
		SearchBar,
		CreateExamPanel
	},
	data () { return {} },
	methods: {}
}
</script>

<style scoped>
.sidebar-container {
  max-width: 85px;
}
.panel-container {
  padding: 2vh;
}
</style>
