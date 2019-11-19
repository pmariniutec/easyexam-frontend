<template>
	<v-card
		class="panel-container"
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
.panel-container {
  height: 96vh;
  overflow-y: auto;
}
</style>
