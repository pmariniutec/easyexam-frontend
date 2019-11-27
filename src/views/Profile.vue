<template>
	<div>
		Profile
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Profile',
	data () {
		return {

		}
	},

	created () {

	},

	methods: {
		...mapActions('auth', ['userDetail']),

		startCourse () {

		}
	}
}
</script>

<style scoped>
</style>
