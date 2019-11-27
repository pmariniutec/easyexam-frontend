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
				<TextArea
					title="Question"
          value="question.content"
					:cols="68"
					:rows="3"
          @input="question.content = $event"
          class="my-3"
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
        <v-checkbox
          v-model="isShareable"
          label="Share?"
        />
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
import LaTeXPreview from '@/components/LaTeXPreview'

export default {
  	name: 'AddQuestionModal',
  	components: {
  		Button,
		  IconQuestion,
		  TextArea,
      LaTeXPreview,
  	},
  	data: () => ({
  		dialog: false,
  		question: {
			  content: '',
			  keywords: [], 
		  },
      tex: '',
      isShareable: true,
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
