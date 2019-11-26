<template>
	<v-card
		max-height="100"
		class="mx-auto exam-row"
	>
		<vue-context
			ref="menu"
			:close-on-click="closeOnClick"
			style="padding-left: 0"
		>
			<template slot-scoped="child">
				<li>
					<a
						href="#"
						@click.prevent="previewExamClick(child.data)"
					>
						<v-icon
							small
							left
						>mdi-eye</v-icon>
						Preview
					</a>
				</li>
				<li>
					<a
						href="#"
						@click.prevent="downloadExamClick(child.data)"
					>

						<v-icon
							small
							left
						>mdi-download</v-icon>
						Download
					</a>
				</li>
				<li>
					<a
						href="#"
						@click.prevent="editExamClick(child)"
					>

						<v-icon
							small
							left
						>mdi-lead-pencil</v-icon>
						Edit
					</a>
				</li>
				<v-divider />
				<li>
					<a
						href="#"
						@click.prevent="deleteExamClick(data)"
					>

						<v-icon
							small
							left
						>mdi-delete</v-icon>
						Delete
					</a>
				</li>
			</template>
		</vue-context>
		<v-row
			class="grey--text text--darken-1 text-center"
			flat
			@contextmenu.prevent="$refs.menu.open($event, {data: 'dataInfo'})"
		>
			<v-col>
				<v-icon
					dense
					left
					color="blue"
				>
					mdi-file-document
				</v-icon>
				{{ examInfo.title }}
			</v-col>

			<v-col>
				{{ examInfo.questions.length }} questions
			</v-col>

			<v-col>
				{{ (new Date(examInfo.updated)).toLocaleString() }}
			</v-col>

			<v-col>
				{{ (new Date(examInfo.created)).toLocaleString() }}
			</v-col>
			<v-col>
				<div class="text-center">
					<v-menu offset-y>
						<template v-slot:activator="{ on }">
							<v-btn
								icon
								v-on="on"
							>
								<v-icon>
									mdi-dots-vertical
								</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								v-for="(item, index) in menu_items"
								:key="index"
								@click="item.onclick(examInfo)"
							>
								<v-icon
									small
									left
								>
									{{ item.icon }}
								</v-icon>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import { VueContext } from 'vue-context'

export default {
	name: 'ExamRowComponent',
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
			closeOnClick: true,
		    circle_points: [
				0, 25, 2, 35, 5, 40, 10, 45, 15, 48,
				25, 50, 35, 48, 40, 45, 45, 40, 48, 35,
				50, 25, 48, 15, 45, 10, 40, 5, 35, 2,
				25, 0, 15, 2, 10, 5, 5, 10, 2, 15
			],
			menu_items: [
				{ 'title': 'Preview', 'icon': 'mdi-eye', 'onclick': this.previewExamClick },
				{ 'title': 'Download', 'icon': 'mdi-download', 'onclick': this.downloadExamClick },
				{ 'title': 'Edit', 'icon': 'mdi-lead-pencil', 'onclick': this.editExamClick },
				{ 'title': 'Delete', 'icon': 'mdi-delete', 'onclick': this.deleteExamClick }
			]
		}
	},
	computed: {
		...mapGetters('exams', ['getCurrentExam']),
		...mapState('course', ['currentCourse']),
		...mapState('exam', ['currentExam'])

	},
	methods: {
		...mapActions('exam', ['deleteExam', 'selectExamById', 'previewExam']),
		deleteExamClick (data) {
			this.deleteExam(data.id)
		},
		previewExamClick (data) {
			this.previewExam()
		},
		editExamClick (data) {
			this.selectExamById({ id: data.id })
				.then(() => {
					this.$router.push({ path: `/dashboard/exam-editor/${this.currentExam.id}` })
				})
		},
		downloadExamClick (data) {

		},
		openMenu (event, data) {
			this.$refs.menu.open(event, data)
		}
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
.exam-row {
	box-shadow: unset;
	border: unset;
}
</style>
