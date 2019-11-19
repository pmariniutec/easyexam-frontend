<template>
	<!--
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
		</v-col>
		</v-row>
		</v-container>
			-->
	<v-container>
		<CoursesComponent />
		<form>
			<v-text-field
				v-model="name"
				label="Name"
				data-vv-name="name"
				required
			/>
			<v-text-field
				v-model="code"
				label="Code"
				data-vv-name="code"
				required
			/>
			<v-btn
				class="mr-4"
				@click="submit"
			>
				submit
			</v-btn>
		</form>
	</v-container>
</template>

<script>

import { mapActions } from 'vuex'
import SideBar from '@/components/SideBar'
import CoursesComponent from '@/components/course/CoursesComponent'

export default {
	name: 'Courses',
	components: {
		CoursesComponent
	},
	data: () => ({
		name: '',
		code: '',
		select: null,
		checkbox: null,
		dictionary: {
			attributes: {
				email: 'E-mail Address'
				// custom attributes
			},
			custom: {
				name: {
					required: () => 'Name can not be empty',
					max: 'The name field may not be greater than 10 characters'
					// custom messages
				},
				select: {
					required: 'Select field is required'
				}
			}
		}

	}),

	methods: {
		...mapActions('course', ['getCourses', 'createCourse']),
		submit () {
			let payload = { name: this.name, code: this.code }
			console.log(payload)
			this.createCourse(payload)
				.then((res) => console.log(res))
				.catch(() => {
					console.log('Error')
				})
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
</style>
