<template>
	<v-app>

    <v-content>
			<router-view />
		</v-content>

    <SideBar v-if="!isAuthenticated" />

	</v-app>
</template>

<script>
import SideBar from '@/components/SideBar'
import TopNav from '@/components/TopNav'

export default {
	name: 'App',
	components: {
		SideBar,
		TopNav
	},
	data () { return {} },
	created () {},
	mounted () {}
}
</script>

<style lang="scss">
</style>
