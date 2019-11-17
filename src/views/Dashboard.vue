<template>
	<v-container
		align-center
		d-flex
		fluid
		class="pa-0"
	>
		<v-row
			no-gutters
		>
			<v-col
				cols="1"
			>
				<SideBar />
			</v-col>
			<v-col
				cols="11"
				align-center
				class="pa-6"
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
</style>
