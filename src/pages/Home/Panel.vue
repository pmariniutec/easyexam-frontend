<template>
	<v-card
		class="homepanel-container"
	>
		<v-card-title>
			Hello User!
		</v-card-title>
	</v-card>
</template>

<script>
export default {
	name: 'HomePanel',
	components: {
	},
	data () {
		return {
		}
	}
}
</script>

<style lang="scss" scoped>
.homepanel-container {
	height: 45%;
	width: 45%;
	margin: 4% 2%;
	overflow-y: auto;
	display: inline-flex;
}
</style>
