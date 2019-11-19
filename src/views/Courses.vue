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
				<CoursesView />
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import CoursesView from '@/components/course/CoursesView'

export default {
	name: 'Courses',
	components: {
		SideBar,
	    CoursesView	
	},
	data: () => ({}),
	methods: { changeTab: function (href) {
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
