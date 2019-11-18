<template>
	<v-container
		d-flex
		fluid
		class="pa-0"
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
.sidebar-container {
  max-width: 85px;
}
.panel-container {
  padding: 2vh;
}
</style>
