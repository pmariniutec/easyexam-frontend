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
						<v-row class="justify-center">
							<v-col
								cols="12"
								sm="6"
								md="4"
							>
								<v-text-field
									v-model="courseName"
									label="Course name"
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
								/>
							</v-col>
						</v-row>
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
							@click="addCourse()"
						>
							Save
						</v-btn>
					</router-link>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
import { mapActions } from 'vuex'
import Button from '@/components/Button'

export default {
	name: 'CourseNewModal',
	components: {
		Button
	},
	data: () => ({
		dialog: false,
		courseName: '',
		courseCode: ''
	}),
	computed: {
	},
	methods: {
		...mapActions('course', ['createCourse', 'getCourses']),
		addCourse: async function (event) {
			let payload = { name: this.courseName, code: this.courseCode }
			this.dialog = false
			await this.createCourse(payload)
	            this.$emit('refresh')
		},
		toggleMessage () {
			console.log('whaaat?')
			this.showMessage = !this.showMessage
		}
	}
}
</script>
<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
</style>
