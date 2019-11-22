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
				<v-card
					class="panel-card"
				>
					<v-card-title
						primary-title
					>
						<v-col cols="10">
							Courses
						</v-col>
						<v-col
							cols="2"
							align="right"
						>
							<CourseNewModal @refresh="forceRender()" />
						</v-col>
					</v-card-title>
					<v-col
						v-for="course in listCourses"
						:key="course.id"
						class="course-item-container"
					>
						<CourseCard
							:course-info="course"
							@refresh="forceRender()"
						/>
					</v-col>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SideBar from '@/components/SideBar'
import CourseCard from '@/components/course/CourseCard'
import CourseNewModal from '@/components/course/CourseNewModal'
export default {
	name: 'Courses',
	components: {
		SideBar,
		CourseCard,
		CourseNewModal
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
			this.$router.push(`/${href}`)
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
  position: fixed;
}
.panel-container {
  margin-left: 70px;
  padding: 2vh;
}
.panel-card {
  min-height: 96vh;
}
.course-col {
  margin: 3vh;
  display: flex;
}
.course-item-container {
  margin: 3vh;
}
</style>
