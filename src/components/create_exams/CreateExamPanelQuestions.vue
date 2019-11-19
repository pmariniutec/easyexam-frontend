<template>
	<v-container fluid>
		<v-row justify="space-around">
			<v-col cols="6">
				<b>
					Preview
				</b>
				<v-row
					v-for="item in texList"
					cols="6"
				>
					<v-col>
						<v-card>
							<LaTeXPreviewCard
								style="width: 90%;"
								:text="item.tex"
								:mode="item.mode"
							/>
							<v-btn @click="item.mode = 'latex'">
								Latex
							</v-btn>
							<v-btn @click="item.mode = 'txt'">
								Source
							</v-btn>
						</v-card>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="6">
				<b>
					Suggested questions
				</b>
				<v-container>
					<v-row>
						<v-text-field
							label="Search for a keyword..."
							solo
						/>
					</v-row>

					<v-row>
						<v-row>
							<v-list>
								<v-list-item-group v-model="question">
									<v-list-item
										v-for="(question, i) in questions"
										:key="i"
									>
										<v-list-item-content>
											<v-list-item-title>
												{{ question.text }}
											</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list-item-group>
							</v-list>
						</v-row>
						<v-row>
							<v-textarea
								counter
								label="New question"
								:rules="questionLimit"
							/>
							<v-btn
								class="my-6 float-right"
								small
							>
								Add
							</v-btn>
						</v-row>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import LaTeXPreviewCard from '@/components/LaTeXPreviewCard'

export default {
	name: 'CreateExamPanelDetails',
	components: {
		LaTeXPreviewCard
	},
	data: () => ({
		question: 3,
		questions: [
			{
				text: 'Question 1'
			},
			{
				text: 'Question 2'
			},
			{
				text: 'Question 3'
			}
		],
		questionLimit: [
			v => v.length <= 60 || 'Max 60 characters'
		],
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
		changeMode (mode) {
			console.log(this)
			console.log(mode)
			this.mode = mode
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
