<template>
	<v-dialog
		v-model="dialog"
		persistent
		max-width="600px"
	>
		<template v-slot:activator="{ on }">
			<div
				class="icon"
				v-on="on"
			>
				<IconQuestion />
			</div>
		</template>
		<div class="question-container">
			<div class="question-title-container">
				<h1 class="question-title">
					Add question
				</h1>
			</div>
			<div class="question-data">
				<Input
					v-model="question.content"
					title="Question"
				/>
				<TextArea
					title="Answer"
					:cols="68"
					:rows="5"
				/>
				<v-combobox
					v-model="keywords"
					:items="possibleKeywords"
					:search-input.sync="search"
					hide-selected
					placeholder="Search"
					multiple
					background-color="#FFF"
					label="Keywords"
					outlined
					small-chips
					return-object
				/>
			</div>
			<v-card-actions>
				<v-spacer />
				<Button
					text="Close"
					@click="dialog = false"
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
import { mapActions } from 'vuex'

import Button from '@/components/Button'
import Input from '@/components/Input'
import IconQuestion from '@/components/icons/IconQuestion'
import TextArea from '@/components/TextArea'

export default {
  	name: 'AddQuestionModal',
  	components: {
  		Button,
		Input,
		IconQuestion,
		TextArea
  	},
  	data: () => ({
  		dialog: false,
  		question: {
			content: '',
			keywords: []
		}
  	}),
  	computed: {
  	},
  	methods: {
  		...mapActions('question', ['createQuestion']),
  		addQuestion: async function (event) {
  			this.dialog = false
  			await this.createQuestion(this.question)
  	    this.$emit('refresh')
  		},
		updateQuestionContent: function (event) {
			this.question.content = event.target.value
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

</style>
