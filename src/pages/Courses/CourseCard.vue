<template>
	<div class="course-card">
		<v-card
			:style="bgc"
			class="course-card"
			outlined
		>
			<v-app-bar
				class="course-card-modal"
				style="box-shadow: unset;"
			>
				<v-toolbar-title class="course-card-title">
					{{ courseInfo.name }} : {{ courseInfo.code }}
				</v-toolbar-title>
				<v-spacer />
				<v-menu
					left
					bottom
				>
					<template v-slot:activator="{ on }">
						<v-btn
							icon
							v-on="on"
						>
							<v-icon>mdi-dots-vertical</v-icon>
						</v-btn>
					</template>

					<v-list
						nav
					>
						<v-list-item
							@click="removeCourse($event,courseInfo.id)"
						>
							<v-list-item-title> Delete </v-list-item-title>
						</v-list-item>
					</v-list>
				</v-menu>
			</v-app-bar>
			<v-card-actions>
				<v-btn
					text
					block
					color="black accent-4"
					class="button"
					@click="viewCourse($event, courseInfo)"
				>
					View
				</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'CourseCard',
	components: {
	},
	props: {
		courseInfo: {
			type: Object,
			required: true,
			default: () => {}
		}
	},

	data: () => ({
		bgc: {
			backgroundColor: '#DDDDDD'
		}
	}),
	computed: {
	},
	methods: {
		...mapActions('course', ['deleteCourse', 'selectCourse']),
		viewCourse: function (event, course) {
			this.selectCourse({ 'id': course.id })
			this.$router.push({ path: `/dashboard/exams/${course.id}` })
		},
		removeCourse: async function (event, uuid) {
			await this.deleteCourse(uuid)
	            this.$emit('refresh')
		}
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
	.course-card{
	  width: 24vw;
	  max-width: 200px;
		display: inline-grid;
		margin: 10px;
	}

	.course-card-modal {
    height: 12vw !important;
    max-height: 120px;
	}

	.course-card-title {
    word-wrap: break-word;
    white-space: inherit;
    font-family: Helvetica;
    font-size: 12pt;
	}

	.button {

	}

</style>
