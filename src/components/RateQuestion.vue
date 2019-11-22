<template>
	<v-card
		class="panel-card"
	>
		<v-card-text>
			<v-container fluid>
				<b>
					Question
				</b>
				<v-row>
					<LaTeXPreview
						:text="question"
					/>
				</v-row>
				<b>
					Comments
				</b>
				<v-divider :inset="inset"></v-divider>
				<v-row>
					<v-container>
						<v-row v-for="item in comments">
							<v-col cols="12">
								{{item}}
							</v-col>
						</v-row>
					</v-container>
				</v-row>
				<v-row class="mt-5">
					<b>
						Rating
					</b>
					<v-col
						cols="12"
					>
						<star-rating 
							v-model="rating"
							active-color="#3577CC"
							:star-size='15'
							:star-points="circle_points"
							:rounded-corners="true"
							:padding="5"
						/>
					</v-col>
				</v-row>
				<v-row>
					<b>
						Comment
					</b>
					<v-col
						cols="12"
					>
						<v-textarea
							v-model = "temp_comment"
							auto-grow
						/>
					</v-col>
				</v-row>
			</v-container>
		</v-card-text>
		<v-col
			cols="12"
			class="px-6"
			align="right"
		>
			<v-btn
				@click="cancel"
				class="ma-3"
			>
				Cancel
			</v-btn>
			<v-btn
				color="primary"
				@click="rate"
			>
				Rate
			</v-btn>
		</v-col>
	</v-card>
</template>

<script>
import { mapActions } from 'vuex'

import LaTeXPreview from '@/components/LaTeXPreview'
import Rating from "vue-star-rating"
import JQuery from 'jquery'
let $ = JQuery

export default {
	name: 'CreateQuestionPanel',
	props: {
		'question' : {
			type: String
		},
		'questionId' : {
			type: Number
		}
	},
	components: {
		LaTeXPreview
	},
	data: () => ({
		rating: 1,
		temp_comment: '',
		error: '',
		tab: null,
		circle_points: [0,25, 2,35, 5,40, 10,45, 15,48, 
			25,50, 35,48, 40,45, 45,40, 48,35, 
			50,25, 48,15, 45,10, 40,5, 35,2, 
			25,0, 15,2, 10,5, 5,10, 2,15],
		comments: ["Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam.", 
			"Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam.", 
			"Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam.", 
			"Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam. Very good exam."],
	}),
	computed: {
		getQuestion: function () {
			return this.question;
		}
	},
	methods: {
		rate: function () {
			this.$emit('close-dialog');
		},
		cancel: function () {
			this.$emit('close-dialog');
		}
	}
}

</script>

<style lang="scss" scoped>
</style>
