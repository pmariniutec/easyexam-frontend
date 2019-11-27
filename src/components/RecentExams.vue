<template>
	<v-card
		class="recent-exams-container"
	>
		<v-card-title>
			RecentExams
		</v-card-title>
	</v-card>
</template>

<script>
export default {
	name: 'RecentExams',
	components: {
	},
	data () {
		return {
		}
	}
}
</script>

<style lang="scss" scoped>
.recent-exams-container {
	height: 100%;
	width: 45%;
	margin: 4% 2%;
	overflow-y: auto;
	display: inline-flex;
}
</style>
