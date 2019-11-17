<template>
	<v-card
		class="mx-auto"
	>
		<v-card-title
			primary-title
		>
			<v-row>
				<v-col cols="10">
					Create new exam
				</v-col>
				<v-col cols="2">
					<v-btn
						color="primary"
					>
						Create
					</v-btn>
				</v-col>
			</v-row>
		</v-card-title>

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
	</v-card>
</template>

<script>
import CreateExamPanelDetails from '@/components/CreateExamPanelDetails'
import CreateExamPanelQuestions from '@/components/CreateExamPanelQuestions'

export default {
	name: 'CreateExamPanel',
	components: {
		CreateExamPanelDetails,
		CreateExamPanelQuestions
	},
	data () {
		return {
			tab: null
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
