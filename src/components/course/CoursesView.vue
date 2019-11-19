<template>
    <v-card class="course-panel">
        <h2 class="mx-4 my-6"> Courses </h2>
        <v-row
            v-for="row in rows"
            class="course-col"
        >
            <div
                v-for="course in row"
                :key="course.uuid"
                class="course-item-container"
            >
                <CourseCard :courseInfo="course" />

                <v-divider />
            </div>
        </v-row>
        <v-row class="justify-center">
            <CourseNewModal/>
            <button
                v-if="debugData"
                @click="addCourse" 
            >
                Add test
            </button>
        </v-row>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
import CourseCard from '@/components/course/CourseCard'
import CourseNewModal from '@/components/course/CourseNewModal'

export default {
	name: 'CoursesView',
	components: {
		CourseCard,
        CourseNewModal
	},
	data: () => ({
		courseData: [],
		debugData: false
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
	methods: {
		addCourse: function () {
			this.courseData.push({ name: 'ADA', code: 'CS101', uuid:'CS001' })
		}
	}
}
</script>
<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
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
