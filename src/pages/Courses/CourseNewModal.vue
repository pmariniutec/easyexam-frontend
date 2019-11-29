<template>
	<v-row justify="center">
		<v-dialog
			v-model="dialog"
			persistent
			max-width="600px"
		>
			<template v-slot:activator="{ on }">
				<Button
					text="New Course"
					v-on="on"
				/>
			</template>
			<v-card>
				<v-card-title>
					<span class="headline">Course Information</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-form
							ref="form"
							v-model="valid"
						>
							<v-row class="justify-center">
								<v-col
									cols="12"
									sm="6"
									md="4"
								>
									<v-text-field
										v-model="courseName"
										label="Course name"
										required
										:class="{ 'error--text': error }"
										:rules="[rules.courseName]"
									/>
								</v-col>

								<v-col
									cols="12"
									sm="6"
									md="4"
								>
									<v-text-field
										v-model="courseCode"
										label="Course code"
										hint="code of the course  ex: CS101"
										required
										:class="{ 'error--text': error }"
										:rules="[rules.courseCode]"
									/>
								</v-col>
							</v-row>
						</v-form>
					</v-container>
				</v-card-text>
				<v-card-actions>
					<v-spacer />
					<v-btn
						color="blue darken-1"
						text
						@click="dialog = false"
					>
						Close
					</v-btn>
					<router-link
						:to="{name: 'courses'}"
					>
						<v-btn
							color="blue darken-1"
							text
							:disabled="!valid"
							@click="addCourse()"
						>
							Save
						</v-btn>
					</router-link>
				</v-card-actions>
			</v-card>
		</v-dialog>
		<v-progress-circular
			v-if="onCourseCreate"
			indeterminate
			color="primary"
		/>
	</v-row>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from '@/components/Button'

export default {
	name: 'CourseNewModal',
	components: {
		Button
	},
	data: () => ({
		dialog: false,
		courseName: '',
		courseCode: '',
		message: null,
		timeout: 2000,
		valid: true,
		error: null,
		rules: {
			courseName: value => (value.length >= 1 && value.length <= 60) || 'Min 1, max 60 characters',
			courseCode: value => (value.length >= 4 && value.length <= 60) || 'Min 4, max 60 characters'
		}
	}),
	computed: {
		...mapState('course', ['onCourseCreate', 'courseCreateError']),
		snackbar () {
			return this.message != null
		}
	},
	methods: {
		...mapActions('course', ['createCourse', 'getCourses']),
		addCourse: async function (event) {
			let payload = { name: this.courseName, code: this.courseCode }
			this.dialog = false
			this.createCourse(payload)
				.then((data) => {
					this.$emit('refresh')
					this.message = data
				})
				.catch((error) => {
					let errors = error.response.data.errors.map(x => x.defaultMessage)
					this.message = errors.join('\r\n')
				})
		}
	}
}
</script>
<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
</style>
