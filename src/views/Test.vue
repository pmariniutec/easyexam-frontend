<template>
	<v-container
		align-center
		d-flex
		fluid
		class="pa-0 dashboard-container"
	>
		<Preview />
	</v-container>
</template>

<script>
import Preview from '@/components/Preview'

export default {
	name: 'Test',
	components: {
		Preview
	},
	data () { return {} },
	methods: {}
}
</script>

<style scoped>
  .dashboard-container {
    height: 100%;
    background-color: #F3F3F6;
  }
</style>
