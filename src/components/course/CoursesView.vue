<template>
	<v-container>
		<v-card
			shaped
			hover
			fluid
			fill-height
			elevation="10"
			width="100%"
			class="mx-auto course-container"
		>
			<v-row
				v-for="row in rows"
				:key="row"
				class="course-col"
			>
				<div
					v-for="course in row"
					:key="course.name"
					class="course-item-container"
				>
					<CourseCard :course_info="course" />

					<v-divider />
				</div>
			</v-row>

			<div
				v-if="debug_data"
				md="5"
			>
				<button @click="addCourse">
					Add test
				</button>
			</div>
		</v-card>
	</v-container>
</template>

<script>
import { mapActions } from 'vuex'
import CourseCard from '@/components/course/CourseCard'

export default {
	name: 'CoursesView',
	components: {
		CourseCard
	},
	data: () => ({
		course_data: [],
		debug_data: true
	}),
	computed: {
		rows () {
			let rows = []
			var i, j
			for (i = 0, j = this.course_data.length; i < j; i += 3) {
				rows.push(this.course_data.slice(i, i + 3))
			}
			return rows
		}
	},
	methods: {
		addCourse: function () {
			this.course_data.push({ name: 'curse', code: '123' })
		}
	}
}
</script>
<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
 .course-container {
   display: flex;
 }
 .course-col {
   margin: 10px;
   flex-grow: 1;
   display: flex;
   flex-direction: row;
 }
 .course-item-container {
   padding: 5px;
   margin: 5px;
 }
</style>
