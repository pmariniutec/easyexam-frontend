<template>
	<v-card
		max-height="100"
		class="mx-auto"
	>
		<vue-context ref="menu">
			<li>
				<a
					href="#"
					@click.prevent="onClick($event.target.innerText)"
				>Preview</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="onClick($event.target.innerText)"
				>Download</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="onClick($event.target.innerText)"
				>Edit Name</a>
			</li>
			<li>
				<a
					href="#"
					@click.prevent="onClick($event.target.innerText)"
				>Delete</a>
			</li>
		</vue-context>
		<v-row @contextmenu.prevent.stop="$refs.menu.open">
			<v-col class="centered">
				<v-img
					src="https://image.flaticon.com/icons/svg/1001/1001044.svg"
					aspect-ratio="1"
					height="30"
					width="30"
				/>
				{{ exam_info.name }}
			</v-col>

			<v-col class="centered">
				<star-rating
					:rating="exam_info.rating"
					:padding="15"
					:increment="0.5"
					:star-size="10"
					:read-only="true"
					:show-rating="false"
				/>
			</v-col>

			<v-col class="centered">
				{{ exam_info.number }}
			</v-col>

			<v-col class="centered">
				{{ exam_info.date_edit }}
			</v-col>

			<v-col class="centered">
				{{ exam_info.date_create }}
			</v-col>
		</v-row>
	</v-card>
</template>
<script>

import { VueContext } from 'vue-context'

export default {
	name: 'ExamComponent',
	components: {
		VueContext
	},
	props: {
		examInfo: {
			type: Object,
			required: true,
			default: () => {}
		}
	},

	data () {
		return {
		}
	},
	computed: {

	},
	methods: {
	}
}
</script>

<style lang="scss">
@import '~vue-context/dist/css/vue-context.css';
.centered {
    display: grid;
    justify-content: center;
    align-items: center;

}
</style>
