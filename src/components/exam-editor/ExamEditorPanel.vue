<template>
	<v-card
		class="panel-card"
	>
		<v-card-title
			primary-title
		>
			<v-container>
				<v-row>
					<v-col cols="6">
						<v-text-field
							v-model="exam.title"
							label="Exam Title"
							append-icon="mdi-pencil"
							solo
						/>
					</v-col>
					<v-col
						cols="6"
						align="right"
					>
						<v-dialog
							v-model="dialog"
							width="70%"
						>
							<template v-slot:activator="{ on }">
								<v-btn
									class="ma-2"
									color="red lighten-2"
									dark
									v-on="on"
								>
									Add Question
								</v-btn>
							</template>
							<CreateQuestionPanel
								@close-dialog="closeDialog"
							/>
						</v-dialog>
						<v-btn
							color="secondary"
							class="ma-2"
							@click="previewExam()"
						>
							Preview
						</v-btn>
						<v-btn
							color="primary"
							class="ma-2"
							@click="createExam()"
						>
							Save
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-card-title>
		<v-card-text>
			<v-container>
				<v-row>
					<v-col>
						<v-text-field
							v-model="user.fullName"
							label="Teacher's name"
							disabled
						/>
					</v-col>
					<v-col>
						<v-autocomplete
							ref="course"
							v-model="course"
							:items="listCourses"
							label="Course"
							placeholder="Select..."
						/>
					</v-col>
				</v-row>
			</v-container>

			<CreateExamPanelQuestions />
		</v-card-text>
	</v-card>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

import CreateExamPanelQuestions from '@/components/exam-editor/CreateExamPanelQuestions'
import CreateQuestionPanel from '@/components/exam-editor/CreateQuestionPanel'

export default {
	name: 'ExamEditorPanel',
	components: {
		CreateExamPanelQuestions,
		CreateQuestionPanel
	},
	data: () => ({
		userName: 'firstName lastName',
		exam: {
			  title: 'New Exam',
			  questions: [
				{
					title: 'Martin',
					content: '\\noindent Our friend Martin is moving to Barranco. He is a big fan of beer and pretty much anything that contains alcohol. Luckily, he has found a street with $n$ bars. Since he will definitely visit all of them frequently, he wants to find an apartment close to them.\r\n\r\n\\bigbreak\\noindent Martin wants to minimize the total distance to all of them and has offered you a \\textit{ronnie} to come up with an algorithm to solve his problem.\r\n\r\n\\bigbreak\\noindent Let $n$ be the number of bars in the street and the let the following sequence represent the street numbers where they are: $s_1, s_2, \\ldots, s_i, \\ldots, s_n$. Note that several bars might be in the same location\/street number.\r\n\r\n\\bigbreak\\noindent Both $n$ and the sequence of $s_i$\'s are integers. The distance between two street numbers $s_i$ and $s_j$ is $d_{ij} = |s_i - s_j|$.\r\n\r\n\\begin{enumerate}\r\n\\item Find an $O(n\\log n)$ solution.\r\n\\item \\textit{Bonus}: Can you do better? Sketch a faster algorithm.\r\n\\end{enumerate}'
				},
				{
					title: 'Prove this',
					content: 'If $f = O(g)$ and $g = O(h)$, then $f = O(h)$'
				}
			],
			  keywords: ['ADA']
		},
		course: {
			name: 'Design and Analysis of Algorithms',
			code: 'CS2101'
		},
		error: '',
		tab: null,
		dialog: false
	}),
	beforeMount: function () {
		this.fetchUser()
	},
	computed: {
		...mapState('auth', ['user']),
		...mapState('exam', ['currentExam', 'currentPreview']),
		...mapGetters('course', ['getCourseList']),
		listCourses () {
			return this.getCourseList.map((courseData) => {
				return {
					text: courseData.name,
					value: courseData.id
				}
			})
		}
	},
	methods: {
		...mapActions('auth', ['userDetail']),
		...mapActions('exam', {
			createExamAction: 'createExam',
			previewExamAction: 'previewExam'
		}),
		...mapActions('course', [
			'getCourses',
			'addExamToCourse'
		]),
		fetchUser: async function () {
			await this.userDetail()
		},
		createExam: function () {
			this.createExamAction(this.currentExam)
			// this.addExamToCourse({ courseId, examId })
		},
		previewExam: function () {
			let latexString = '\\documentclass{article}\n' +
         '\\title{' + this.currentExam.title + '}\n' +
         '\\author{' + this.user.fullName + '}\n' +
         '\\begin{document}\n' +
         '\\maketitle\n' +
         '\\begin{center}\n' +
         this.course.name + ' - ' + this.course.code + '\n' +
         '\\end{center}\n'

			if (this.currentExam.questions.length > 0) {
				latexString += '\\begin{enumerate}\n'
			}

			for (var i = 0; i < this.currentExam.questions.length; ++i) {
				latexString += '\\item ' + this.currentExam.questions[i].title + '\n\n' +
          this.currentExam.questions[i].content + '\n'
			}

			if (this.currentExam.questions.length > 0) {
				latexString += '\\end{enumerate}\n'
			}

			latexString += '\\end{document}'

			this.previewExamAction({ latexString })
				.then(() => {
					var file = new Blob([(this.currentPreview)], { type: 'application/pdf' })
					var fileURL = URL.createObjectURL(file)
					window.open(fileURL, '_blank')
				})
		},
		closeDialog: function () {
			this.dialog = false
		}
	}
}
</script>

<style lang="scss" scoped>
.panel-card {
  min-height: 96vh;
}
</style>
