<template>
	<v-dialog
		v-model="model"
		persistent
		max-width="600px"
	>
		<div class="question-container">
			<div class="question-title-container">
				<h1 class="question-title">
					Add question
				</h1>
			</div>
			<div class="question-data">
				<TextArea
					title="Question"
					:data="question.content"
					:cols="68"
					:rows="3"
					class="my-3"
					@input="question.content = $event"
				/>
				<div style="height: 22px;">
					<Button
						text="Generate"
						@click="tex = question.content"
					/>
				</div>
				<div>
					<span class="latex-preview-label">
						Preview
					</span>
					<div class="latex-preview-container">
						<LaTeXPreview
							:text="tex"
						/>
					</div>
				</div>
				<div style="display: flex;">
					<v-checkbox
						v-model="isShareable"
						label="Share"
					/>
					<v-tooltip right>
						<template v-slot:activator="{ on }">
							<v-btn
								icon
								style="margin-top: 13px;"
								v-on="on"
							>
								<v-icon color="grey">
									mdi-help-circle-outline
								</v-icon>
							</v-btn>
						</template>
						<span>Earn 5 points by sharing one question, you must fill the question's keywords.</span>
					</v-tooltip>
				</div>
				<v-combobox
					v-if="isShareable"
					v-model="question.keywords"
					label="Keywords"
					background-color="#FFF"
					placeholder="Select"
					hide-selected
					multiple
					outlined
					small-chips
					return-object
				/>
			</div>
			<v-card-actions>
				<v-spacer />
				<Button
					text="Close"
					@click="model = false"
				/>
				<Button
					text="Add"
					style="margin: 4px;"
					@click="addQuestion()"
				/>
			</v-card-actions>
		</div>
	</v-dialog>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Button from '@/components/Button'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import LaTeXPreview from '@/components/LaTeXPreview'

function initialState () {
	return {
		question: {
		  content: '',
			keywords: []
		},
		tex: '',
		isShareable: true
	}
}

export default {
	name: 'AddQuestionDialog',
	components: {
		Button,
		TextArea,
		LaTeXPreview
	},
	props: {
		dialog: {
			type: Boolean,
			default: false
		}
	},
	data: function () {
		return initialState()
	},
	computed: {
		...mapState('auth', ['user']),
		model: {
			get: function () {
				return this.dialog
			},
			set: function (newValue) {
				this.$emit('change', newValue)
			}
		}
	},
	methods: {
		...mapActions('auth', ['updateUserPoints']),
  	...mapActions('question', ['createQuestion']),
  	addQuestion: async function (event) {
  	  this.model = false
		  if (this.isShareable) {
			  await this.createQuestion(this.question)
				this.updateUserPoints({ points: this.user.points + 5 })
		  }
		  this.$emit('submit-question', this.question)
		  this.resetData()
  	},
		resetData: function () {
			Object.assign(this.$data, initialState())
		}
	}
}
</script>

<style lang="scss" scoped>
@import '~vue-context/dist/css/vue-context.css';
  .icon {
    height: 100%;
    width: 100%;
    align-self: center;
    text-align: center;
  }

  .question-container {
    background-color: #F3F3F6;
    border-radius: 20px;
  }

  .question-title-container {
    padding: 25px;
  }

  .question-title {
    border-bottom: #23246E solid;
    padding: 0 0 10px 0;
  }

  .question-data {
    padding: 20px;
  }

  .latex-preview-label {
    color: #5A667F;
    font-size: 12px;
  }

  .latex-preview-container {
    background-color: white;
    border: 1px solid #DBDBDB;
    border-radius: 12px;
    min-height: 88px;
    padding: 10px;
  }

</style>
