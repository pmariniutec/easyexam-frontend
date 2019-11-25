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
			<ContributeContainer>
				<ContributeCard />
			</ContributeContainer>
			<div class="add-menu-container">
				<AddMenu />
			</div>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SideBar from '@/components/SideBar'
import ContributeContainer from '@/components/ContributeContainer'
import ContributeCard from '@/pages/Contribute/ContributeCard'
import AddMenu from '@/components/AddMenu'

export default {
	name: 'Courses',
	components: {
		SideBar,
		ContributeContainer,
		ContributeCard,
		AddMenu
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
	.add-menu-container {
		position: fixed;
		bottom: 26px;
		right: 24px;
		width: 7%;
		height: 11%;
	}

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
