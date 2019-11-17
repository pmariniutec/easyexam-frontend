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
				<SideBar />
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
