<template>
	<v-card
		class="panel-card"
	>
		<v-card-title
			primary-title
		>
			<v-container>
				<v-row>
					<v-col cols="9">
						Create new exam
					</v-col>
					<v-col
						cols="3"
						align="right"
					>
						<v-btn
							color="secondary"
							class="ma-2"
						>
							Preview
						</v-btn>
						<v-btn
							color="primary"
							class="ma-2"
						>
							Save
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</v-card-title>
		<v-card-text>
			<v-container>
				<v-row>
					<v-col>
						<v-text-field
							v-model="userName"
							label="Teacher's name"
							disabled
						/>
					</v-col>
					<v-col>
						<v-autocomplete
							ref="course"
							v-model="course"
							:items="courses"
							label="Course"
							placeholder="Select..."
						/>
					</v-col>
				</v-row>
			</v-container>

			<CreateExamPanelQuestions />
		</v-card-text>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'

import CreateExamPanelQuestions from '@/components/create_exams/CreateExamPanelQuestions'

export default {
	name: 'CreateExamPanel',
	components: {
		CreateExamPanelQuestions
	},
	data: () => ({
		course: 'CourseName - CourseCode',
		courses: ['CourseName - CourseCode'],
		userName: 'firstName lastName',
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
		}
	}
}
</script>

<style lang="scss" scoped>
.panel-card {
  min-height: 96vh;
}
</style>
