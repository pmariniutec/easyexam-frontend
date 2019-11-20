<template>
	<v-card
		class="panel-card"
	>
		<v-card-text>
			<v-container fluid>
				<v-row justify="space-around">
					<v-col cols="6">
						<v-textarea
							v-model = "temp_question"
							auto-grow
							label = "Make your question..."
							:value = "getQuestion"
						/>
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
		</v-card-text>
		<v-col
			cols="6"
			class="px-6"
		>
			<v-btn
				@click = "generatePreview"
				color = "secondary"
			>
				Generate Preview
			</v-btn>
			<span
				style="width:5px; display: inline-block"
			/>
			<v-btn
				color="primary"
				@click="createNewQuestion"
			>
				Submit
			</v-btn>
		</v-col>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'

import LaTeXPreview from '@/components/LaTeXPreview'
import JQuery from 'jquery'
let $ = JQuery

export default {
	name: 'CreateQuestionPanel',
	components: {
		LaTeXPreview
	},
	data: () => ({
		exam: {
			  title: '',
			  questions: '',
			  keywords: ''
		},
		select: ['add-tags-with', 'enter', 'tab', 'paste'],
		items: [],
		search: '',
		question: '',
		temp_question: '',
		error: '',
		tab: null,
	}),
	computed: {
		getQuestion: function () {
			return this.question;
		}
	},
	methods: {
		...mapActions('exams', { createExamAction: 'createExam' }),

		createExam: function () {
			this.createExamAction(this.exam).then(() => ({}))
			  .catch(() => {
					this.error = 'Invalid Credentials'
				})      
		},
		generatePreview: function  () {
			this.question = this.temp_question;
		},
		createNewQuestion: function () {
			this.$emit('close-dialog');
		}
	}
}


$(function(){

  $('.tags input').on('focusout',function(){
    var txt= this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g,''); // allowed characters
    if(txt) {
      $(this).before('<span class="tag">'+ txt.toLowerCase() +'</span>');
    }
    this.value="";
  }).on('keyup',function( e ){
    // if: comma,enter (delimit more keyCodes with | pipe)
    if(/(188|13|9)/.test(e.which)){ $(this).focusout();
    }
  });


  $('.tags').on('click','.tag',function(){
        if(confirm("Really delete this tag?")) $(this).remove();
  });
$('.tags').tagcloud({
    tags: ['Quint', 'USS Indianapolis', 'Orca']
});

});

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
