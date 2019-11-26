<template>
	<div class="contribute-card-container">
		<Input
			title="Question"
			class="question"
		/>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
import Input from '@/components/Input'

export default {
	name: 'ContributeCard',
	components: {
		Input
	},
	props: {
		courseInfo: {
			type: Object,
			required: true,
			default: () => {}
		}
	},

	data: () => ({
	}),
	computed: {
	},
	methods: {
		...mapActions('course', ['deleteCourse']),
		viewCourse: function (event, course) {
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
	.contribute-card-container {
		width: 100%;
	}

	.question {
		width: 100%;
		color: #23246E;
		font-family: "Helvetica";
		font-size: 20px;
		font-weight: bold;
	}
</style>
