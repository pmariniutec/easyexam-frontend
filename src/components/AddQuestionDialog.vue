<template>
	<v-dialog
		v-model="dialog"
		width="40%"
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
		<v-card
			class="panel-card"
		>
			<v-card-text>
				<v-container fluid>
					<v-row justify="space-around">
						<v-col cols="6">
							<v-textarea
								v-model="temp_tex"
								auto-grow
								label="Make your question..."
								:value="getQuestion"
							/>
							<br><br>
						</v-col>
						<v-col cols="6">
							<b>
								Preview
							</b>
							<LaTeXPreview
								:text="question.tex"
							/>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>
			<v-col
				cols="6"
				class="px-6"
			>
				<Button
					text="Generate Preview"
					style="position: absolute; bottom: 20px; left: 30px"
					@click="generatePreview"
				/>
				<Button
					text="Submit"
					style="position: absolute; bottom: 20px; left: 190px"
					@click="createNewQuestion"
				/>
			</v-col>
		</v-card>
	</v-dialog>
</template>

<script>
import { mapActions } from 'vuex'

import LaTeXPreview from '@/components/LaTeXPreview'
import Button from '@/components/Button'

export default {
	name: 'AddQuestionDialog',
	components: {
		LaTeXPreview,
		Button
	},
	data: () => ({
		temp_tex: '',
		question: {
			tex: '',
			mode: 'latex'
		},
		dialog: false
	}),
	computed: {

	},
	methods: {
		generatePreview: function () {
			this.question.tex = this.temp_tex
		},
		getQuestion: function () {
			return this.question.tex
		},
		createNewQuestion: async function () {
			console.log(this.temp_tex)
			await this.$emit('submit-question', { tex: this.temp_tex, mode: this.question.mode })
			this.question.tex = ''
			this.temp_tex = ''
			this.dialog = false
		},
		closeDialog: function () {
			this.dialog = false
		}
	}
}

</script>

<style lang="scss" scoped>
.create-exam-card {
	background-color: #F3F3F6;
	width: 80%;
	left: 8%;
	margin: 20px 0;
	border-radius: 5% !important;
	padding: 0 30px;
  overflow-y: auto;
}
.title {
	color: #23246E;
  font-weight: 700 !important;
  border-bottom-color: #23246E;
  border-bottom-style: solid;
	border-radius: 1px;
  width: 100%;
  margin: 20px 0px 10px 0px;
  padding-bottom: 8px;
}
.input-card {
	padding-top: 20px;
}
.row {
	margin-bottom: 5px;
}
.row:after {
	content: "";
  display: table;
  clear: both;
}
.column {
  float: left;
  width: 50%;
	padding: 0px 20px;
}

	input.tags {
	  border: none;
	  box-shadow: none;
	  width: auto;
	  margin: 0;
	  padding: 0;
	  border-radius: 4px;
	  color: #999;
	  font-size: .9em;
	  min-height:1.9em;
	  display: inline-block;
	  background: transparent;
	}
	input.tags:focus {
	  outline:none;
	  background: transparent;
	}
	.tags-bar{
		-webkit-appearance: none;
    width: 100%;
    border: 1px solid #DBDBDB;
		border-radius: 12px;
    font-family: inherit;
    padding: 7px;
    height: 48px;
    font-size: 16px;
    font-weight: 500;
    background-color: white;
    color: #223254;
  	transition: all .15s ease;
	}

	.tag {
		position: relative;
		display:inline-block;
		border-radius: 4px;
		background: red;
		color: #fff;
		margin: 0em 0.1em .1em .1em;
		padding: .2em 1.3em .15em .45em;
		transition: opacity 1s ease;
	}

	.tag:after {
		position: absolute;
		display:block;
		top: .2em;
		right: 5px;
		content: "×";
		font-size: 1em;
		line-height: 1em;
		color: rgba(255,255,255,0.5);
		}

	.tag:hover{
	 opacity: .8;
	 cursor:pointer;
	  transition: opacity 1s ease;
	}

</style>
