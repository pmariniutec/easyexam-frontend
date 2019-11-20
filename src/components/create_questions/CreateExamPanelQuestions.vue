<template>
	<v-container fluid>
		<v-row justify="space-around">
			<v-col cols="6">
				<v-textarea 
					v-model = "temp_question"
					auto-grow	
					label = "Make your question..."
					:value = "getQuestion"
				/>
				<v-btn
					@click = "generatePreview"
					color = "secondary"
				>
					Generate Preview
				</v-btn>
				<br><br>
				<v-combobox
					:items="items"
					:search-input.sync="search"
					hide-selected
					hint="Maximum of 5 tags"
					label="Tags"
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
			</v-col>
			<v-col cols="6">
				<b>
					Preview
				</b>
				<LaTeXPreview 
					:text="question"
				/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import LaTeXPreview from '@/components/LaTeXPreview'
/* TODO
		- bug #1:
			- steps:
				1. move suggested card to question list
				2. edit newly transferred question
				3. move newly edited question to other position
			- result:
				- changes made in 2 reset
*/

export default {
	name: 'CreateExamPanelDetails',
	components: {
		LaTeXPreview
	},
	data: () => ({
		select: ['add-tags-with', 'enter', 'tab', 'paste'],
		items: [],
		search: '',
		question: '',
		temp_question: ''
	}),
	watch: {
		model (val) {
			if (val.length > 5) {
				this.$nextTick(() => this.model.pop())
			}
		}
	},
	computed: {
		getQuestion: function () {
			return this.question;
		}
	},
	methods: {
		changeMode (mode) {
			console.log(this)
			console.log(mode)
			this.mode = mode
		},
		generatePreview () {
			console.log("Hola");
			this.question = this.temp_question;
		}
	}
}
</script>

<style lang="scss" scoped>
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
