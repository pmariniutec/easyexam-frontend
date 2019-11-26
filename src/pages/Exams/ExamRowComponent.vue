<template>
	<v-card
		max-height="100"
		class="mx-auto exam-row"
	>
		<AreYouSureDialog
			:title="title"
			:dialog="deleteDialog"
			:on-accept="onAcceptDelete"
			:on-decline="onDeclineDelete"
		/>
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
				{{ examInfo.questions.length }} question(s)
			</v-col>

			<v-col>
				{{ (new Date(examInfo.updated)).toLocaleString() }}
			</v-col>

			<v-col>
				{{ (new Date(examInfo.created)).toLocaleString() }}
			</v-col>
			<v-col cols="1">
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
import AreYouSureDialog from '@/components/AreYouSureDialog'

export default {
	name: 'ExamRowComponent',
	components: {
		AreYouSureDialog
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
			deleteDialog: false,
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
		...mapState('exam', ['currentExam', 'previewExamById']),
		title () {
			return 'Are you sure you want to delete ' + this.examInfo.title + '?'
		}
	},
	methods: {
		...mapActions('exam', ['deleteExam', 'selectExamById', 'previewExam', 'getExams']),
		previewExamClick (data) {
			this.previewExamById({ id: data.id })
		},
		editExamClick (data) {
			this.selectExamById({ id: data.id })
				.then(() => {
					this.$router.push({ path: `/dashboard/exam-editor/${this.currentExam.id}` })
				})
		},
		deleteExamClick (data) {
			this.deleteDialog = true
		},
		downloadExamClick (data) {
		},
		openMenu (event, data) {
			this.$refs.menu.open(event, data)
		},
		onAcceptDelete () {
			this.deleteExam(this.examInfo.id)
				.then(() => {
					this.getExams({ courseId: this.currentCourse.id })
					this.deleteDialog = false
				})
		},
		onDeclineDelete () {
			this.deleteDialog = false
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
	width: 100%;
	padding-left: 0px;
	padding-right: 0px;
}
</style>
