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
			<BaseContainer>
				<h1>Courses</h1>
				<div />
			</BaseContainer>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SideBar from '@/components/SideBar'
import BaseContainer from '@/components/BaseContainer'

export default {
	name: 'Courses',
	components: {
		SideBar,
		BaseContainer
	},
	data: () => ({
		debugData: true
	}),
	computed: {
		...mapGetters('course', ['getCourseList']),
		listCourses () {
			return this.getCourseList
		}
	},
	beforeMount () {
		this.getCourses()
	},
	methods: {
		...mapActions('course', ['createCourse', 'getCourses']),
		changeTab: function (href) {
			this.$router.push({ name: href })
		},
		forceRender () {
			console.log('Re-render')
			this.getCourses()
		}
	}
}
</script>

<style scoped>
.sidebar-container {
  max-width: 180px;
}

	h1 {
		font-family: Helvetica;
		font-size: 16pt;
		color: #23246E;
	}

	.course-panel {
		overflow: scroll;
	}

 .course-col {
   margin: 3vh;
   display: flex;
 }
</style>
