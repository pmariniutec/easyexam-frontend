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

export default {
	name: 'App',
  components: {
    SideBar
  },
	data () { return {} },
	created () {},
	mounted () {}
}
</script>

<style lang="scss">
</style>
