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
			<v-col class="panel-container">
				<v-card class="course-panel">
					<h2 style="font-family: Helvetica" class="mx-4 my-6">
						Courses
					</h2>
                    <v-col
                        v-for="course in listCourses"
                        :key="course.id"
                        class="course-item-container"
                    >
                        <CourseCard
                            :course-info="course"
                            @refresh="forceRender()"
                            />

                        <v-divider />
					</v-col>
					<v-row class="justify-center">
						<CourseNewModal @refresh="forceRender()"/>
					</v-row>
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
        listCourses() {
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
        forceRender() {
            console.log("Re-render")
            this.getCourses()
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
.course-panel {
    height: 96vh;
    overflow-y: auto;
}
 .course-col {
   margin: 3vh;
   display: flex;
 }
 .course-item-container {
   margin: 3vh;
 }
</style>
