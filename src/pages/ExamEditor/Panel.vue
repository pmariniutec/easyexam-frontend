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
						<AddQuestionDialog />
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
							@click="saveExam()"
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
			<v-container fluid>
				<v-row justify="space-around">
					<v-col cols="6">
						<b>
							Preview
						</b>
						<draggable
							v-model="questionList"
							group="people"
							@start="drag=true"
							@end="drag=false"
						>
							<v-row
								v-for="item in questionList"
								:key="item.id"
								cols="6"
							>
								<v-col>
									<LaTeXPreviewCard
										:id="item.id"
										custom-style="width: 90%;"
										:text.sync="item.tex"
										:mode="item.mode"
										@edited="changeQuestion"
									/>
								</v-col>
							</v-row>
						</draggable>
					</v-col>
					<v-col cols="6">
						<b>
							Suggested questions
						</b>
						<v-container>
							<v-row fluid>
								<v-combobox
									:items="items"
									:search-input.sync="search"
									hide-selected
									hint="Maximum of 5 tags"
									label="Add some tags for a more accurate search..."
									multiple
									persistent-hint
									small-chips
								>
									<template v-slot:no-data>
										<v-list-item>
											<v-list-item-content>
												<v-list-item-title>
													No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
												</v-list-item-title>
											</v-list-item-content>
										</v-list-item>
									</template>
								</v-combobox>
							</v-row>

							<v-row>
								<v-container>
									<v-row
										v-for="item in suggestedList"
										:key="item.id"
										no-gutters
									>
										<v-col>
											<v-card>
												<v-container>
													<v-row>
														<v-col
															cols="2"
														>
															<v-btn icon>
																<v-icon
																	@click="acceptSuggestion(item)"
																>
																	mdi-menu-left
																</v-icon>
															</v-btn>
															<v-dialog
																v-model="item.dialog"
																width="70%"
																persistent
															>
																<template v-slot:activator="{on}">
																	<v-btn
																		icon
																		v-on="on"
																	>
																		<v-icon>
																			mdi-heart
																		</v-icon>
																	</v-btn>
																</template>
																<RateQuestion
																	:id="item.id"
																	:question="item.tex"
																	@close-dialog="closeDialog(item);"
																/>
															</v-dialog>
														</v-col>
														<v-col cols="10">
															<LaTeXPreview
																:text="item.tex"
															/>
														</v-col>
													</v-row>
												</v-container>
											</v-card>
										</v-col>
									</v-row>
								</v-container>
							</v-row>
						</v-container>
					</v-col>
				</v-row>
			</v-container>
		</v-card-text>
	</v-card>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'

import draggable from 'vuedraggable'
import AddQuestionDialog from '@/components/AddQuestionDialog'
import LaTeXPreviewCard from '@/components/LaTeXPreviewCard'
import LaTeXPreview from '@/components/LaTeXPreview'
import RateQuestion from '@/components/RateQuestion'

export default {
	name: 'ExamEditorPanel',
	components: {
		draggable,
		AddQuestionDialog,
		LaTeXPreviewCard,
		LaTeXPreview,
	  RateQuestion
	},
	data: () => ({
		select: ['add-tags-with', 'enter', 'tab', 'paste'],
		items: [],
		search: '', // sync search
		suggestedList: [
			{
				id: 1,
				dialog: false,
				mode: 'latex',
				tex: String.raw`$$x^2$$`
			}
		],
		questionList: [
			{
				id: '3',
				mode: 'latex',
				tex: String.raw`Prove or disprove: $O(f(n) + g(n)) = f(n) + O(g(n))$, if $f(n)$ and $g(n)$.`
			}
		],
		userName: 'firstName lastName',
		exam: {
			  title: 'New Exam',
			  questions: [
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
		saveExam: function () {
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
		changeMode (mode) {
			console.log(this)
			console.log(mode)
			this.mode = mode
		},
		updateTags () {
			this.$nextTick(() => {
				this.select.push(...this.search.split(','))
				this.$nextTick(() => {
					this.search = ''
				})
			})
		},
		acceptSuggestion (item) {
			console.log(item)
			for (var i = 0; i < this.suggestedList.length; i++) {
				if (this.suggestedList[i].id === item.id) {
					this.suggestedList.splice(i, 1)
					break
				}
			}
			this.questionList.push({ 'id': item.id, 'mode': 'latex', 'tex': item.tex })
		},
		changeQuestion (quest) {
			this.questionList.map(function (q) {
				if (quest.id == q.id) {
					q.tex = quest.tex
					q.mode = quest.mode
				}
			})
			console.log(this.questionList)
		},
		closeDialog: function () {
			this.dialog = false
		}
	},
	watch: {
		model (val) {
			if (val.length > 5) {
				this.$nextTick(() => this.model.pop())
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.panel-card {
  min-height: 96vh;
}

.tag-input span.chip {
  background-color: #1976d2;
  color: #fff;
  font-size: 1em;
}

.tag-input span.v-chip {
  background-color: #1976d2;
  color: #fff;
  font-size:1em;
  padding-left:7px;
}

.tag-input span.v-chip::before {
    content: "label";
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
}
</style>
