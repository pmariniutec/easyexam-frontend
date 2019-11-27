<template>
	<div class="panel-card">
		<div class="editor-exam">
			<div>
				<input
					v-model="examTitle"
					class="editor-title"
				>
				<v-btn
					class="ma-3"
					color="red lighten-2"
					dark
					@click.stop="addQuestionDialog = true"
				>
					Add Question
				</v-btn>
				<AddQuestionDialog
					:dialog="addQuestionDialog"
					@change="addQuestionDialog = $event"
					@submit-question="addLocalQuestion"
				/>
			</div>
			<div class="grid-container">
				<div class="questions-container">
					<draggable
						group="people"
						@start="drag=true"
						@end="drag=false"
					>
						<div
							v-for="item in listQuestions"
							:key="item.id"
						>
							<LaTeXPreviewCard
								:id="item.id"
								:text.sync="item.content"
								:mode="item.mode"
								@edited="changeQuestion"
								@remove="removeQuestion"
							/>
						</div>
					</draggable>
				</div>
				<div class="suggested-questions-container">
					<b>Suggested questions</b>
					<div>
						<v-combobox
							v-model="keywords"
							:items="possibleKeywords"
							:search-input.sync="search"
							hide-selected
							placeholder="Search"
							multiple
							outlined
							small-chips
							return-object
						/>
						<v-btn
							block
							@click="fetchSuggestedQuestionsHandler"
						>
							<v-icon>
								mdi-send
							</v-icon>
						</v-btn>
					</div>
					<div
						v-for="item in suggestedQuestions"
						:key="item.id"
						class="suggested-questions"
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
								<RateQuestion
									:id="item.id"
									:question="item.content"
								/>
							</div>
							<v-col cols="10">
								<LaTeXPreview
									:text="item.content"
								/>
							</v-col>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="exam-data-container">
			<p class="label-data">
				Teacher's Name
			</p>
			<input
				:value="getUser.firstName + ' ' + getUser.lastName"
				class="input-data"
				disabled
			>
			<p class="label-data">
				Course
			</p>
			<v-autocomplete
				ref="course"
				v-model="course"
				:items="listCourses"
				placeholder="Select..."
				style="margin: 0; padding: 0"
			/>

			<Button
				text="Preview"
				class="preview-btn"
				@click="previewExam()"
			/>
			<Button
				text="Save"
				class="save-btn"
				@click="saveExam()"
			/>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
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
		possibleKeywords: [],
		keywords: [],
		search: '', // sync search
		course: null,
		error: '',
		tab: null,
		addQuestionDialog: false
	}),
	computed: {
		...mapGetters('auth', ['getUser']),
		...mapGetters('exam', ['getCurrentExam', 'getExamPreview']),
		...mapGetters('course', ['getCourseList']),
		...mapState('question', ['suggestedQuestions']),
		...mapState('exam', { examError: 'error' }),

		listCourses () {
			return this.getCourseList.map((courseData) => {
				return {
					text: courseData.name,
					value: courseData
				}
			})
		},
		listQuestions () {
			return this.getCurrentExam.questions
		},
		examTitle: {
			get () {
				return this.getCurrentExam.title
			},
			set (value) {
				this.$store.commit('exam/UPDATE_EXAM_TITLE', value)
			}
		}
	},
	beforeMount: function () {
		this.fetchUser()
		this.fetchCourses()
	},
	methods: {
		...mapActions('auth', ['userDetail']),
		...mapActions('exam', {	createExamAction: 'createExam', selectExamAction: 'selectExam', previewExamAction: 'previewExam', addQuestionAction: 'addQuestion', compileExam: 'compileExam'
		}),
		...mapActions('course', ['getCourses', 'addExamToCourse']),
		...mapActions('question', ['fetchSuggestedQuestions']),

		fetchSuggestedQuestionsHandler (data) {
			console.log('KEYWORDS: ', this.keywords)
			this.fetchSuggestedQuestions({ 'keywords': this.keywords })
		},
		fetchUser: async function () {
			await this.userDetail()
		},
		fetchCourses: async function () {
			await this.getCourses()
		},
		saveExam: function () {
			let examToSave = {
				title: this.getCurrentExam.title,
				questions: []
			}

			for (let i = 0; i < this.getCurrentExam.questions.length; ++i) {
				let question = this.getCurrentExam.questions[i]
				examToSave.questions.push({
					content: question.content
				})
			}

			if (this.course) {
				examToSave.courseId = this.course.id
			}

		  this.createExamAction(examToSave)
				.then(() => {
					this.$emit('save-success')
				})
		},
		previewExam: function () {
			let courseId = this.course ? this.course.id : null
			this.compileExam({ title: this.getCurrentExam.title, questions: this.getCurrentExam.questions, courseId })
				.then((data) => {
					var file = new Blob([(this.getExamPreview)], { type: 'application/pdf' })
					var fileURL = URL.createObjectURL(file)
					window.open(fileURL, '_blank')
				})
		},
		changeMode (mode) {
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
			for (var i = 0; i < this.suggestedQuestions.length; i++) {
				if (this.suggestedQuestions[i].id === item.id) {
					this.suggestedQuestions.splice(i, 1)
					break
				}
			}
			let tmp_exam = this.getCurrentExam
			tmp_exam.questions.push({ 'id': item.id, 'mode': 'latex', 'content': item.content })
			this.selectExamAction(tmp_exam)
		},
		changeQuestion (quest) {
			this.getCurrentExam.questions.map(function (q) {
				if (quest.id == q.id) {
					q.content = quest.content
					q.mode = quest.mode
				}
			})
		},
		removeQuestion (quest) {
			for (var i = 0; i < this.getCurrentExam.questions.length; i++) {
				var isEqual = true
				for (var key in quest.keys) {
					var compKey = this.getCurrentExam.questions[i][key] == quest[key]
					equal = equal && compKey
				}
				if (isEqual) {
					let tmp_exam = this.getCurrentExam
					tmp_exam.questions.splice(i, 1)
					this.selectExamAction(tmp_exam)
					break
				}
			}
		},
		addLocalQuestion: function (localQuestion) {
			let tmp_exam = this.getCurrentExam
			tmp_exam.questions.push(localQuestion)
			this.selectExamAction(tmp_exam)
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
		padding: 70px 0 0 0;
	}

  .grid-container {
    display: flex;
  }

	.questions-container {
    flex: 50%;
		margin: 20px 10px 20px 0;
		font-family: "Helvetica";
	}

	.suggested-questions-container {
    flex: 50%;
    margin: 20px 40px;
	}

  .suggested-questions-container > div > .v-input {
    height: 65px;
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
		width: calc(100% - 199px);
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

  .preview-btn {
    width: 90px;
    position: fixed;
    bottom: 30px;
  }

  .save-btn {
    width: 90px;
    padding-left: 27px;
    position: fixed;
    bottom: 30px;
    right: 40px;
  }

  @media screen and (max-width: 1100px) {
    .preview-btn {
      bottom: 65px;
      right: 6vw;
    }

    .save-btn {
      bottom: 20px;
      right: 6vw;
    }
  }
</style>
