<template>
	<v-container
		d-flex
		fluid
		class="pa-0"
	>
		<v-row no-gutters>
			<v-col
        class="sidebar-container"
			>
				<SideBar
					@change-tab-event="changeTab"
				/>
			</v-col>
			<v-col
				class="panel-container"
			>
        <HomePanel />
      </v-col>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import HomePanel from '@/components/HomePanel'

export default {
	name: 'Dashboard',
	components: {
		SideBar,
    HomePanel,
	},
	data: () => ({}),
	methods: {
		changeTab: function (href) {
			this.$router.push(`/${href}`)
		}
	}
}
</script>

<style scoped>
.sidebar-container {
  max-width: 85px;
}
.panel-container {
  padding: 2vh;
}
</style>
