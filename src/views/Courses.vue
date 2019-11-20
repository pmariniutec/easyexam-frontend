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
                    <h2 class="mx-4 my-6">
                        Courses
                    </h2>
                    <v-row
                        v-for="row in rows"
                        :key="row"
                        class="course-col"
                    >
                        <div
                            v-for="course in row"
                            :key="course.uuid"
                            class="course-item-container"
                        >
                            <CourseCard :course-info="course" />

                            <v-divider />
                        </div>
                    </v-row>
                    <v-row class="justify-center">
                        <CourseNewModal />
                        <button
                            v-if="debugData"
                            @click="addCourse"
                        >
                            Add test
                        </button>
                    </v-row>
                </v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import { mapActions } from 'vuex'
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
		courseData: [],
		debugData: true
    }),
    computed: {
		rows () {
			let rows = []
			var i, j
			for (i = 0, j = this.courseData.length; i < j; i += 3) {
				rows.push(this.courseData.slice(i, i + 3))
			}
			return rows
		}
    },
	beforeMount () {
		this.loadCourses()
	},
	methods: { 
		...mapActions('exams', ['getCourses', 'deleteCourse']),
        changeTab: function (href) {
		    this.$router.push(`/${href}`)
	    },
		loadCourses () {
			//this.courseData = this.getCourses()
		},
		addCourse: function () {
			this.courseData.push({ name: 'ADA', code: 'CS101', uuid: '123' })
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
