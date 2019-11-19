<template>
	<v-card
		class="create-exam-card"
	>
		<v-card-title
			primary-title
		>
			<v-row>
				<div class="title">
					Create new exam
				</div>

			</v-row>
		</v-card-title>
		
		<div class="row" style="width:100%">
			<div class="column">
				<label for="title">Title</label>
				<input id="title" name="title">
			</div>
		<div class="column">
				<label for="title">Teacher's name</label>
				<input id="title" name="title">
			</div>
		</div >
		<div class="row" style="width:100%">
			<div class="column">
				<label for="title">Title</label>
				<input id="title" name="title">
			</div>
		<div class="column">
				<label for="title">Teacher's name</label>
				<input id="title" name="title">
			</div>
		</div >
	<v-card-text>
			<v-tabs
				v-model="tab"
			>
				<v-tab
					href="#tab-1"
				>
					Details
				</v-tab>
				<v-tab
					href="#tab-2"
				>
					Questions
				</v-tab>
			</v-tabs>

			<v-tabs-items
				v-model="tab"
			>
				<v-tab-item
					key="1"
					value="tab-1"
				>
					<CreateExamPanelDetails />
				</v-tab-item>
				<v-tab-item
					key="2"
					value="tab-2"
				>
					<CreateExamPanelQuestions />
				</v-tab-item>
			</v-tabs-items>
		</v-card-text>
		<v-col
					cols="2"
					align="right"
					class="px-6"
				>
					<v-btn
						color="primary"
					>
						Create
					</v-btn>
				</v-col>
	</v-card>
</template>

<script>
import CreateExamPanelDetails from '@/components/create_exams/CreateExamPanelDetails'
import CreateExamPanelQuestions from '@/components/create_exams/CreateExamPanelQuestions'

export default {
	name: 'CreateExamPanel',
	components: {
		CreateExamPanelDetails,
		CreateExamPanelQuestions
	},
	data () {
		return {
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
		}
	}
}
</script>

<style lang="scss" scoped>
.create-exam-card {
	background-color: #F3F3F6;
	width: 70%;
	left: 12%;
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
label {
	width: 100%;
  display: inline-flex;
}
input {
	width: 100%;
	background-color: white;
	padding: 7px;
	border: 1px solid #DBDBDB;
	border-radius: 12px;
	box-sizing: border-box;
}

</style>
