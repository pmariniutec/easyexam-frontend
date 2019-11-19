<template>
	<div>
		{{ fetchCourses }}
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'CoursesComponent',
	components: {
	},
	data: () => ({
	}),
	computed: {
		fetchCourses () {
			return this.$store.state.courses
		}
	},
	methods: {
	}
}
</script>
<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
</style>
