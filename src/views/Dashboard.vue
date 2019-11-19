<template>
	<v-container
		d-flex
		fluid
		class="pa-0 dashboard"
	>
		<v-row no-gutters>
			<v-col
        id="sidebar"
      >
				<SideBar 
          v-on:change-tab-event="changeTab"
        />
			</v-col>
			<v-col
        class="panel-container"
      >

			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
export default {
	name: 'Dashboard',
	components: {
		SideBar,
	},
	data: () => ({}),
	methods: {
    changeTab: function (href) {
      this.$router.push(`/${href}`)
    },
  }
}
</script>

<style scoped>
.dashboard {
	background-color: #F3F3F6 !important;
	width: 100%;
  height: 100%;
}
.sidebar-container {
  max-width: 85px;
}
.panel-container {
  padding: 2vh;
}
</style>
