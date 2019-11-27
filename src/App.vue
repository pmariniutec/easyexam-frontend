<template>
	<v-app>
		<TopNav />

		<v-content>
			<router-view />
		</v-content>

		<Footer />
	</v-app>
</template>

<script>
import TopNav from '@/components/TopNav'
import Footer from '@/components/Footer'

export default {
	name: 'App',

	components: {
		TopNav,
		Footer
	},

	data () {
		return {

		}
	},

	created () {

	},

	mounted () {

	}
}
</script>

<style lang="scss">
</style>
