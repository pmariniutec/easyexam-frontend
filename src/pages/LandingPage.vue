<template>
	<div>
		<v-toolbar>
			<v-toolbar-title style="font-size:33px">
				<img
					src="@/assets/img/home/logo.png"
					height="25"
				>
				EasyExam
			</v-toolbar-title>
			<v-spacer />
			<v-toolbar-items>
				<v-btn
					text
					x-large
					:to="{ name : 'login' }"
				>
					Login
				</v-btn>
				<v-btn
					text
					x-large
					color="primary"
					:to="{ name : 'register' }"
				>
					Register
				</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-container class="my-10">
			<v-row>
				<v-col
					cols="4"
				>
					<v-container fill-height>
						<v-layout
							row
							wrap
							align-center
						>
							<v-flex>
								<v-container
									fluid
									style="padding: 0; font-size:24px"
								>
									Introducing <i><b>EasyExam</b></i>, an easy way to find questions and make exams!
								</v-container>
								<v-btn
									color="primary"
									large
									:to="{ name: 'register' }"
									class="my-5"
								>
									Create an account
								</v-btn>
							</v-flex>
						</v-layout>
					</v-container>
				</v-col>
				<v-col
					cols="8"
					align="center"
				>
					<img
						src="@/assets/img/home/create-exam.png"
						height="400"
					>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data () { return {} },
	computed: {},
	methods: {}
}
</script>

<style lang="scss">
</style>
