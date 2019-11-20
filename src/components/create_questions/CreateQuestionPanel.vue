<template>
	<v-card
		class="create-exam-card"
	>
		<v-card-title
			primary-title
		>
			<v-row>
				<div class="title">
					Create a question
				</div>
			</v-row>
		</v-card-title>
		<v-card-text>
			<CreateExamPanelQuestions />
		</v-card-text>
		<v-col
			cols="2"
			align="right"
			class="px-6"
		>
			<v-btn
				color="primary"
			>
				Submit
			</v-btn>
		</v-col>
	</v-row>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'

import CreateExamPanelQuestions from '@/components/create_questions/CreateExamPanelQuestions'
import CreateExamInput from '@/components/create_exams/CreateExamInput'
import JQuery from 'jquery'
let $ = JQuery

export default {
	name: 'CreateQuestionPanel',
	components: {
		CreateExamPanelQuestions
	},
	data: () => ({
		exam: {
			  title: '',
			  questions: '',
			  keywords: ''
		},
    error: '',
		tab: null,
		texList: [{ mode: 'latex', tex: String.raw`
				\documentclass{article}
					\begin{document}
						\noindent Our friend Martin is moving to Barranco. He is a big fan of beer and pretty much anything that contains alcohol. Luckily, he has found a street with $n$ bars. Since he will definitely visit all of them frequently, he wants to find an apartment close to them.

						\bigbreak\noindent Martin wants to minimize the total distance to all of them and has offered you a \textit{ronnie} to come up with an algorithm to solve his problem.

						\bigbreak\noindent Let $n$ be the number of bars in the street and the let the following sequence represent the street numbers where they are: $s_1, s_2, \ldots, s_i, \ldots, s_n$. Note that several bars might be in the same location/street number.

						\bigbreak\noindent Both $n$ and the sequence of $s_i$'s are integers. The distance between two street numbers $s_i$ and $s_j$ is $d_{ij} = |s_i - s_j|$.

						\begin{enumerate}
							\item Find an $O(n\log n)$ solution.
							\item \textit{Bonus}: Can you do better? Sketch a faster algorithm.
						\end{enumerate}
					\end{document}
			` }, { mode: 'latex', tex: String.raw`
				\documentclass{article}
					\begin{document}
						\noindent Our friend Martin is moving to Barranco. He is a big fan of beer and pretty much anything that contains alcohol. Luckily, he has found a street with $n$ bars. Since he will definitely visit all of them frequently, he wants to find an apartment close to them.

						\bigbreak\noindent Martin wants to minimize the total distance to all of them and has offered you a \textit{ronnie} to come up with an algorithm to solve his problem.

						\bigbreak\noindent Let $n$ be the number of bars in the street and the let the following sequence represent the street numbers where they are: $s_1, s_2, \ldots, s_i, \ldots, s_n$. Note that several bars might be in the same location/street number.

						\bigbreak\noindent Both $n$ and the sequence of $s_i$'s are integers. The distance between two street numbers $s_i$ and $s_j$ is $d_{ij} = |s_i - s_j|$.

						\begin{enumerate}
							\item Find an $O(n\log n)$ solution.
							\item \textit{Bonus}: Can you do better? Sketch a faster algorithm.
						\end{enumerate}
					\end{document}
			` }, { mode: 'latex', tex: String.raw`
				\documentclass{article}
					\begin{document}
						\noindent Our friend Martin is moving to Barranco. He is a big fan of beer and pretty much anything that contains alcohol. Luckily, he has found a street with $n$ bars. Since he will definitely visit all of them frequently, he wants to find an apartment close to them.

						\bigbreak\noindent Martin wants to minimize the total distance to all of them and has offered you a \textit{ronnie} to come up with an algorithm to solve his problem.

						\bigbreak\noindent Let $n$ be the number of bars in the street and the let the following sequence represent the street numbers where they are: $s_1, s_2, \ldots, s_i, \ldots, s_n$. Note that several bars might be in the same location/street number.

						\bigbreak\noindent Both $n$ and the sequence of $s_i$'s are integers. The distance between two street numbers $s_i$ and $s_j$ is $d_{ij} = |s_i - s_j|$.

						\begin{enumerate}
							\item Find an $O(n\log n)$ solution.
							\item \textit{Bonus}: Can you do better? Sketch a faster algorithm.
						\end{enumerate}
					\end{document}
				` }
		]
	}),
	methods: {
		...mapActions('exams', { createExamAction: 'createExam' }),

		createExam: function () {
      this.createExamAction(this.exam)
        .then(() => ({}))
			  .catch(() => {
					this.error = 'Invalid Credentials'
				})      
    },
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
