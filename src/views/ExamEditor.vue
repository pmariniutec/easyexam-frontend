<template>
	<v-container
		align-center
		d-flex
		fluid
		class="pa-0 dashboard-container"
	>
		<SideBar />
		<v-card style="margin-left: 100px; max-height: 90vh; overflow-y: scroll;">
			<v-container>
				<v-row>
					<v-col>
						<v-btn @click="mode='raw'">
							Raw
						</v-btn>
						<v-btn @click="mode='latex'">
							LaTeX
						</v-btn>
					</v-col>
				</v-row>
				<v-row v-for="item in texList">
					<v-col>
						<LaTeXPreviewCard
							v-if="mode==='latex'"
							style="width: 600px;"
							:text="item.tex"
						/>
						<v-card
							v-else
							style="padding: 10px; width: 600px; font-size: 12px;"
						>
							{{ item.tex }}
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</v-card>
	</v-container>
</template>

<script>
import SideBar from '@/components/SideBar'
import LaTeXPreviewCard from '@/components/LaTeXPreviewCard'

export default {
	name: 'Editor',
	components: {
		SideBar,
		LaTeXPreviewCard
	},
	data () {
		return {
			mode: 'latex',
			texList: [{ tex: String.raw`
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
			` }, { tex: String.raw`
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
			` }, { tex: String.raw`
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
	},
	methods: {}
}
</script>

<style scoped>
.dashboard-container {
	height: 100%;
	background-color: #f3f3f6;
}
p {
  font-size: 12px;
}
</style>
