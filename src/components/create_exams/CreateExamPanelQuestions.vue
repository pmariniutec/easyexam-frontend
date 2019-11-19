<template>
	<v-container fluid>
		<v-row justify="space-around">
			<v-col cols="6">
				<b>
					Preview
				</b>
				<draggable
					v-model="questionList"
					group="people"
					@start="drag=true"
					@end="drag=false"

				>
					<v-row
						v-for="item in questionList"
						:key="item.id"
						cols="6"
					>
						<v-col>
							<LaTeXPreviewCard
								style="width: 90%;"
								:text.sync="item.tex"
								:mode="item.mode"
							/>
						</v-col>
					</v-row>
				</draggable>
			</v-col>
			<v-col cols="6">
				<b>
					Suggested questions
				</b>
				<v-container>
					<v-row fluid>
						<v-combobox
							:items="items"
							:search-input.sync="search"
							hide-selected
							hint="Maximum of 5 tags"
							label="Add some tags for a more accurate search..."
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
					</v-row>

					<v-row>
						<v-container>
							<v-row
								v-for="item in suggestedList"
								:key="item.id"
								no-gutters
							>
								<v-col>
									<v-card>
										<v-row>
											<v-col
												cols="1"
												style="padding: 0px;"
											>
												<v-btn
													style="padding: 0px;"
													height="100%"
													small
													block
													@click="acceptSuggestion(item)"
												>
													<v-icon>mdi-menu-left</v-icon>
												</v-btn>
											</v-col>
											<v-col cols="11">
												<LaTeXPreview
													style="width: 90%;"
													:text="item.tex"
												/>
											</v-col>
										</v-row>
									</v-card>
								</v-col>
							</v-row>
						</v-container>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import LaTeXPreviewCard from '@/components/LaTeXPreviewCard'
import LaTeXPreview from '@/components/LaTeXPreview'
import draggable from 'vuedraggable'
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
		draggable,
		LaTeXPreviewCard,
		LaTeXPreview
	},
	data: () => ({
		select: ['add-tags-with', 'enter', 'tab', 'paste'],
		items: [],
		search: '', // sync search
		suggestedList: [{ id: 1, mode: 'latex', tex: String.raw`$$x^2$$` },
			{ id: 2, mode: 'latex', tex: String.raw`
			\documentclass{article}
				\usepackage[shortlabels]{enumitem}
			\begin{document}
				Arrange the following functions in increasing order of growth rate and justify your answer through a proof. 
					\begin{enumerate}
					\item $2^n$
					\item $\log_2 n$
					\item $n^{\log_2n}$
					\item $2^{n^2}$
					\item $2^{2^n}$
					\end{enumerate} 
			\end{document}
				` }
		],
		questionList: [{ id: 3, mode: 'latex', tex: String.raw`
				\documentclass{article}
					\begin{document}
						Prove or disprove: $O(f(n) + g(n)) = f(n) + O(g(n))$, if $f(n)$ and $g(n)$.
					\end{document}
			` }, { id: 4, mode: 'latex', tex: String.raw`
				\documentclass{article}
					\begin{document}
						If $f = O(g)$ and $g = O(h)$, then $f = O(h)$
					\end{document}
			` }, { id: 5, mode: 'latex', tex: String.raw`
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
	watch: {
		model (val) {
			if (val.length > 5) {
				this.$nextTick(() => this.model.pop())
			}
		}
	},
	methods: {
		changeMode (mode) {
			console.log(this)
			console.log(mode)
			this.mode = mode
		},
		updateTags () {
			this.$nextTick(() => {
				this.select.push(...this.search.split(','))
				this.$nextTick(() => {
					this.search = ''
				})
			})
		},
		acceptSuggestion (item) {
			console.log(item)
			for (var i = 0; i < this.suggestedList.length; i++) {
				if (this.suggestedList[i].id === item.id) {
					this.suggestedList.splice(i, 1)
					break
				}
			}
			this.questionList.push({ 'id': item.id, 'mode': 'latex', 'tex': item.tex })
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
