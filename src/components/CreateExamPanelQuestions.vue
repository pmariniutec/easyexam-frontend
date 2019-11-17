<template>
	<v-container>
		<v-row>
			<v-col cols="6" />

			<v-col cols="6">
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
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'CreateExamPanelDetails',
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
		]
	})
}
</script>

<style lang="scss" scoped>
</style>
