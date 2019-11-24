<template>
	<div class="panel-card">
			<div class="editor-exam">
				<input class="editor-title" value="New Exam"/>
				<div class="questions">
					<draggable
						v-model="questionList"
						group="people"
						@start="drag=true"
						@end="drag=false"
					>
						<div
							v-for="item in questionList"
							:key="item.id"
						>
							<LaTeXPreviewCard
								:id="item.id"
								:text.sync="item.tex"
								:mode="item.mode"
								@edited="changeQuestion"
							/>
						</div>
					</draggable>
				</div>
				<div class="suggested-questions-container">
					<b>Suggested questions</b>
					<AddQuestionDialog />
					<div
						class="suggested-questions"
						v-for="item in suggestedList"
						:key="item.id"
					>
							<div class="suggested-question-card">
								<div class="icons">
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
								</div>
								<v-col cols="10">
									<LaTeXPreview
										:text="item.tex"
									/>
								</v-col>
							</div>
					</div>
				</div>
			</div>
			<div class="exam-data-container">
				<p class="label-data">Teacher's Name</p>
				<input
					class="input-data"
					id="fullname"
					v-model="user.fullName"
					disabled
				/>
				<p class="label-data">Course</p>
				<v-autocomplete
					ref="course"
					v-model="course"
					:items="listCourses"
					placeholder="Select..."
					style="margin: 0; padding: 0"
				/>
				<p class="label-data">Keywords</p>
				<v-combobox
					:items="items"
					:search-input.sync="search"
					hide-selected
					hint="Maximum of 5 tags"
					placeholder="Add some tags for a more accurate search..."
					style="margin: 0; padding: 0"
					multiple
					persistent-hint
					small-chips
				>
					<v-list-item>
						<v-list-item-content>
							<v-list-item-title>
								No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
							</v-list-item-title>
						</v-list-item-content>
					</v-list-item>
				</v-combobox>
				<Button
					text="Preview"
					@click="previewExam()"
					style="position: fixed;bottom: 30px;"
				/>
				<Button
					text="Save"
					@click="saveExam()"
					style="position: fixed;bottom: 30px;right: 40px"
				/>
			</div>
	</div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import draggable from 'vuedraggable'

import AddQuestionDialog from '@/components/AddQuestionDialog'
import LaTeXPreviewCard from '@/components/LaTeXPreviewCard'
import LaTeXPreview from '@/components/LaTeXPreview'
import RateQuestion from '@/components/RateQuestion'
import Button from '@/components/Button'

export default {
	name: 'ExamEditorPanel',
	components: {
		draggable,
		AddQuestionDialog,
		LaTeXPreviewCard,
		LaTeXPreview,
	  RateQuestion,
		Button
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
		background-color: unset;
		float: right;
		width: 100%;
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
	.editor-exam {
		height: 100%;
		width: 68%;
		position: fixed;
    padding: 25px 0 0 0;
	}

	.questions {
		float: left;
		margin: 20px 10px 20px 0;
		font-family: "Helvetica";
	}

	.suggested-questions-container {
		float: right;
		width: 35%;
	}

	.suggested-questions {
	}

	.exam-data-container {
		height: 100%;
		width: 25%;
		background-color: white;
		right: 0;
		position: fixed;
		padding: 50px 40px 0 40px;
	}

	.input-data {
		margin: 0 0 15px 0;
	}

	.input-data:focus {
		outline: none;
	}

	.label-data {
		color: #23246E;
		font-weight: 400;
		margin: 0;
	}

	.editor-title {
		width: 100%;
		color: #23246E;
		font-family: "Helvetica";
    font-size: 20px;
    font-weight: bold;
	}

	.editor-title:focus {
		outline: none;
	}

	.suggested-question-card {
		background-color: white;
		border-radius: 20px;
		margin: 10px;
		padding: 10px;
		box-shadow: 3px 5px 20px 0px rgba(156, 161, 250, 0.16);
	}

	.suggested-question-card:hover {
		box-shadow: 3px 5px 20px 0px rgba(150, 150, 150, 0.40);
	}

	.icons {
		float: left;
	}
</style>
